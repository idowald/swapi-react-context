// A way to iterate the attributes of each object to keep an order on the f.e
// and to avoid using Object.key "randomness"
import { People } from '../../../../types/people';
import { Species } from '../../../../types/species';
import { Planet } from '../../../../types/planet';

export const peopleAttributes: (keyof People)[] = ['name', 'birth_year', 'eye_color', 'gender', 'hair_color', 'height', 'mass', 'skin_color'];
export const speciesAttributes : (keyof Species)[] = ['name',
  'classification',
  'designation',
  'average_height',
  'skin_colors',
  'hair_colors',
  'eye_colors',
  'average_lifespan',
  'language'];
export const planetAttributes :(keyof Planet)[] = ['name',
  'rotation_period',
  'orbital_period',
  'diameter',
  'climate',
  'gravity',
  'terrain',
  'surface_water',
  'population'];
