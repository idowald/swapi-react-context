import InfiniteScroll from 'react-infinite-scroll-component';
import { People } from '../../../../types/people';
import { Species } from '../../../../types/species';
import { Planet } from '../../../../types/planet';
import { Entities } from '../../../../types/entity';
import { peopleAttributes, planetAttributes, speciesAttributes } from './utils/attributes';
import { TableHeader } from './tableHeader';

interface Props{
    entities :People[] | Species[] | Planet[],
    entityType : Entities.People | Entities.Planets | Entities.Species;
    nextCallback:()=>void;
    hasMore: boolean;
}
interface RowProps{
    entity :People | Species | Planet,
    entityType : Entities.People | Entities.Planets | Entities.Species;
}
const TableRow = ({
                      entity,
                      entityType,
                  }: RowProps)=> {
    switch (entityType) {
        case Entities.People:
            return (
                <tr
                    key={entity.url}
                >
                    {
                        peopleAttributes
                            .map((attr) => <td key={attr}>{(entity as People)[attr]}</td>)
                    }
                </tr>
            );
        case Entities.Planets:
            return (
                <tr
                    key={entity.url}
                >
                    {
                        planetAttributes
                            .map((attr) => <td key={attr}>{(entity as Planet)[attr]}</td>)
                    }
                </tr>
            );
        case Entities.Species:
            return (
                <tr key={entity.url}>
                    {speciesAttributes.map((attr) => <td key={attr}>{(entity as Species)[attr]}</td>)}
                </tr>
            );
        default:
            return null;
    }
}
function TableBody({
  entities, entityType, hasMore, nextCallback,
}: Props) {
    // TODO I had problem with infiniteScroller- it doesn't support Table
  return (
    <InfiniteScroll
      dataLength={entities.length}
      next={nextCallback}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      endMessage={(
        <p style={{ textAlign: 'center' }}>
          <b>Yay! You have seen it all</b>
        </p>
          )}
    >
      <tbody>
        {entities.map((entity) =><TableRow entity={entity} entityType={entityType}/>)}
      </tbody>
    </InfiniteScroll>
  );
}
export function Table({
  entities, entityType, nextCallback, hasMore,
}: Props) {
  return (
    <table>
      <TableHeader entityType={entityType} />
      <TableBody
        entities={entities}
        entityType={entityType}
        nextCallback={nextCallback}
        hasMore={hasMore}
      />
    </table>
  );
}
