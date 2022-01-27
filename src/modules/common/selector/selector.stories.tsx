import { Selector } from './selector';
import { Entities } from '../../../types/entity';

export default {

  title: 'Selector',
  component: Selector,
};
export function SelectorEntities() {
  return (
    <Selector
      name="some selector"
      onChange={() => null}
      options={[Entities.Species, Entities.People, Entities.Planets]}
      selected={Entities.Planets}
    />
  );
}
