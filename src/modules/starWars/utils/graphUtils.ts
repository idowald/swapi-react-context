import { Entities } from '../../../types/entity';
import { Planet } from '../../../types/planet';
import { People } from '../../../types/people';
import { Species } from '../../../types/species';

export const getGraphXAxis = (entityType: Entities) => {
  switch (entityType) {
    case Entities.Planets:
      return ['name_length', 'rotation_period', 'orbital_period', 'diameter', 'population'];
    case Entities.People:
      return ['name_length', 'height', 'mass'];
    case Entities.Species:
      return ['name_length', 'average_height', 'average_lifespan'];
    default:
      return [];
  }
};
export const getGraphYAxis = (entityType: Entities, entity : Planet | People | Species| null) => {
  if (entity === null) {
    return [];
  }
  const xAxis = getGraphXAxis(entityType);

  return xAxis.map((entityAttribute) => {
    // added some extra attribute
    if (entityAttribute === 'name_length') {
      return entity.name.length;
    }
    // @ts-ignore
    return entity[entityAttribute];
  });
};
