import { getGraphXAxis, getGraphYAxis } from './graphUtils';
import { Entities } from '../../../types/entity';
import { Species } from '../../../types/species';

test('test graphUtils X Axis', () => {
  const axis = getGraphXAxis(Entities.Planets);
  expect(axis).toEqual([
    'name_length',
    'rotation_period',
    'orbital_period',
    'diameter',
    'population',
  ]);
  expect(getGraphXAxis(Entities.People)).toEqual([
    'name_length',
    'height',
    'mass',
  ]);
  expect(getGraphXAxis(Entities.Species)).toEqual([
    'name_length',
    'average_height',
    'average_lifespan',
  ]);
});
test('test graphUtils Y Axis empty species', () => {
  const species : Species = {
    average_height: '',
    average_lifespan: '',
    classification: '',
    designation: '',
    eye_colors: '',
    hair_colors: '',
    language: '',
    name: '',
    skin_colors: '',
    url: '',
  };
  expect(getGraphYAxis(Entities.Species, species)).toEqual([0, '', '']);
});
test('test graphUtils Y Axis existing species', () => {
  const species : Species = {
    average_height: '123',
    average_lifespan: '1234',
    classification: 'popo',
    designation: 'ttt',
    eye_colors: '202',
    hair_colors: 'green',
    language: 'Heb',
    name: 'Poko',
    skin_colors: 'green',
    url: 'none',
  };
  expect(getGraphYAxis(Entities.Species, species)).toEqual([
    species.name.length,
    '123',
    '1234',
  ]);
});
