import {
  createContext, useEffect, useMemo, useRef, useState,
} from 'react';

import { debounce } from 'lodash';
import { Entities, EntityType } from '../../../types/entity';
import { Encoding, EncodingType } from '../../../types/encoding';
import { People } from '../../../types/people';
import { Species } from '../../../types/species';
import { Planet } from '../../../types/planet';
import { fetchSWAPINext } from '../../../services/swapi';
import { useFetchStarWarsOnStateUpdate } from '../hooks/useStarWars';

export interface StarWarsContextInt {
    entityType: EntityType
    // eslint-disable-next-line
    setEntityType: (entityType: Entities)=>void;
    search: string;
    // eslint-disable-next-line
    setSearch: (searchTerm:string)=>void;
    selectedEntity: People | Species | Planet | null;
    // eslint-disable-next-line
    setSelectedEntity: (entity: People | Species | Planet | null)=>void;
    encoding: EncodingType;
    // eslint-disable-next-line
    setEncoding: (encoding:EncodingType)=>void;
    entitiesList : People[] | Species[] | Planet[];
    errorMessage: string;
    isLoading: boolean;
    count : number;
    fetchNextPage: ()=>Promise<any>;
    cleanState :()=>void;
}

export const StarWarsContext = createContext<StarWarsContextInt>(null!);
const DEFAULT_ENTITY = Entities.Species;
export function StarWarsContextProvider({ children }: { children: JSX.Element }) {
  const [isLoading, setIsLoading] = useState(false);
  const [entityType, setEntityType] = useState(DEFAULT_ENTITY);
  const [search, setSearch] = useState('');
  const [selectedEntity, setSelectedEntity] = useState<People | Species | Planet| null>(null);
  const [encoding, setEncoding] = useState<Encoding>(Encoding.NORMAL);
  const [errorMessage, setErrorMessage] = useState('');
  const [entitiesList, setEntitiesList] = useState<People[] | Species[] | Planet[]>([]);
  const countRef = useRef(0);
  const nextRef = useRef('');
  // current is controlled by the component
  const getNextDebounced = debounce(() => {
    if (nextRef.current) {
      fetchSWAPINext(nextRef.current)
        .then((response) => {
          countRef.current = response.count;
          nextRef.current = response.next;
          setEntitiesList([...entitiesList, ...response.results]);
        }).catch((error) => {
          setErrorMessage(error.message);
        }).finally(() => {
          setIsLoading(false);
        });
    }
  }, 300);
  const fetchNextPage = () => {
    // a workaround for react-virtualized problem with loadMoreRows
    getNextDebounced();
    return Promise.resolve();
  };
  const cleanState = () => {
    setSearch('');
    setEntityType(DEFAULT_ENTITY);
  };

  const value = useMemo(
    () => ({
      entityType,
      encoding,
      setEntityType,
      selectedEntity,
      entitiesList,
      setSelectedEntity,
      search,
      setSearch,
      setEncoding,
      isLoading,
      errorMessage,
      count: countRef.current,
      fetchNextPage,
      cleanState,
    }),
    [encoding,
      selectedEntity,
      entitiesList,
      search,
      isLoading,
      errorMessage,
    ],
  );
  // clear errors after few seconds
  useEffect(() => {
    if (errorMessage) {
      const timeout = setTimeout(() => {
        setErrorMessage('');
      }, 4000);
      return () => clearTimeout(timeout);
    }
  }, [errorMessage]);

  useFetchStarWarsOnStateUpdate({
    setIsLoading,
    entityType,
    search,
    encoding,
    countRef,
    nextRef,
    setEntitiesList,
    setErrorMessage,
  });

  return (
    <StarWarsContext.Provider value={value}>
      {children}
    </StarWarsContext.Provider>
  );
}
