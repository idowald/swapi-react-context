import {
  createContext, useEffect, useMemo, useState,
} from 'react';
import { Entities } from '../../../types/entity';
import { Encoding } from '../../../types/encoding';
import { People } from '../../../types/people';
import { Species } from '../../../types/species';
import { Planet } from '../../../types/planet';
import { fetchSWAPI } from '../../../services/swapi';

interface StarWarsContextInt {
    entityType: Entities
    // eslint-disable-next-line
    setEntityType: (entityType: Entities)=>void;
    search: string;
    // eslint-disable-next-line
    setSearch: (searchTerm:string)=>void;
    selectedEntity: People | Species | Planet | null;
    // eslint-disable-next-line
    setSelectedEntity: (entity: People | Species | Planet)=>void;
    encoding: Encoding;
    // eslint-disable-next-line
    setEncoding: (encoding:Encoding)=>void;
    entitiesList : People[] | Species[] | Planet[];
    // eslint-disable-next-line
    setEntitiesList : (entities:(People[] | Species[] | Planet[]))=>void;
    errorMessage: string;
    isLoading: boolean;
}

export const StarWarsContext = createContext<StarWarsContextInt>(null!);

export function StarWarsContextProvider({ children }: { children: JSX.Element }) {
  const [isLoading, setIsLoading] = useState(false);
  const [entityType, setEntityType] = useState(Entities.People);
  const [search, setSearch] = useState('');
  const [selectedEntity, setSelectedEntity] = useState<People | Species | Planet| null>(null);
  const [encoding, setEncoding] = useState<Encoding>(Encoding.NORMAL);
  const [errorMessage, setErrorMessage] = useState('');
  const [entitiesList, setEntitiesList] = useState<People[] | Species[] | Planet[]>([]);
  const value = useMemo(
    () => ({
      entityType,
      encoding,
      setEntityType,
      selectedEntity,
      entitiesList,
      setEntitiesList,
      setSelectedEntity,
      search,
      setSearch,
      setEncoding,
      isLoading,
      errorMessage,
    }),
    [encoding,
      selectedEntity,
      entitiesList,
      search,
      isLoading,
      errorMessage],
  );
  useEffect(() => {
    const abortController = new AbortController();
    setIsLoading(true);
    fetchSWAPI({ entities: entityType, query: search, format: encoding }, abortController.signal)
      .then((response) => {
        setEntitiesList(response.results);
      }).catch((error) => {
        setErrorMessage(error.message);
      }).finally(() => {
        setIsLoading(false);
      });
    return () => abortController.abort();
  }, [entityType, search, encoding]);

  return (
    <StarWarsContext.Provider value={value}>
      {children}
    </StarWarsContext.Provider>
  );
}
