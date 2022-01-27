import { MutableRefObject, useContext, useEffect } from 'react';
import { StarWarsContext } from '../context/starWarsContext';
import { fetchSWAPI } from '../../../services/swapi';
import { People } from '../../../types/people';
import { Species } from '../../../types/species';
import { Planet } from '../../../types/planet';
import { EntityType } from '../../../types/entity';
import { EncodingType } from '../../../types/encoding';

export const useStarWars = () => useContext(StarWarsContext);

/**
 * This hook will be called on state change
 * and will make a query to the backend and refresh the view.
 */
interface Props{
    // eslint-disable-next-line
    setIsLoading: (loading: boolean)=>void,
    entityType: EntityType,
    search : string,
    encoding : EncodingType,
    countRef: MutableRefObject<number>,
    nextRef: MutableRefObject<string>,
    // eslint-disable-next-line
    setEntitiesList: (entityList: People[] | Species[] | Planet[])=>void,
    // eslint-disable-next-line
    setErrorMessage: (message:string)=>void
}
export const useFetchStarWarsOnStateUpdate = ({
  setIsLoading,
  entityType,
  search,
  encoding,
  countRef,
  nextRef,
  setEntitiesList,
  setErrorMessage,
}: Props) => {
  useEffect(() => {
    const abortController = new AbortController();
    setIsLoading(true);
    fetchSWAPI({ entities: entityType, query: search, format: encoding }, abortController.signal)
      .then((response) => {
        countRef.current = response.count;
        nextRef.current = response.next;
        setEntitiesList(response.results);
      }).catch((error) => {
        setErrorMessage(error.message);
      }).finally(() => {
        setIsLoading(false);
      });

    return () => abortController.abort();
  }, [entityType, search, encoding]);
};
