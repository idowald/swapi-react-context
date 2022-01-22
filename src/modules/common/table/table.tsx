import { People } from '../../../types/people';
import { Species } from '../../../types/species';
import { Planet } from '../../../types/planet';
import { Entities } from '../../../types/entity';
import { peopleAttributes, planetAttributes, speciesAttributes } from './utils/attributes';
import { TableHeader } from './tableHeader';

interface Props{
    entities :People[] | Species[] | Planet[],
    entityType : Entities.People | Entities.Planets | Entities.Species;
}

export function Table({ entities, entityType }: Props) {
  return (
    <table>
      <TableHeader entityType={entityType} />
      <tbody>
        {entities.map((entity) => {
          switch (entityType) {
            case Entities.People:
              return (
                <tr
                  key={entity.url}
                >
                  {
                      peopleAttributes.map((attr) => <td key={attr}>{(entity as People)[attr]}</td>)
                  }
                </tr>
              );
            case Entities.Planets:
              return (
                <tr
                  key={entity.url}
                >
                  {
                      planetAttributes.map((attr) => <td key={attr}>{(entity as Planet)[attr]}</td>)
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
        })}
      </tbody>
    </table>
  );
}
