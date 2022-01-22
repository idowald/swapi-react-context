import { Entities } from '../../../../types/entity';
import { peopleAttributes, planetAttributes, speciesAttributes } from './utils/attributes';
import { TableRowHeader } from './tableRowHeader';

interface HeaderProps { entityType : Entities.People | Entities.Planets | Entities.Species;}
export function TableHeader({ entityType }: HeaderProps) {
  switch (entityType) {
    case Entities.People:
      return <thead><TableRowHeader attributes={peopleAttributes} /></thead>;
    case Entities.Planets:
      return <thead><TableRowHeader attributes={planetAttributes} /></thead>;
    case Entities.Species:
      return <thead><TableRowHeader attributes={speciesAttributes} /></thead>;
    default:
      return <thead />;
  }
}
