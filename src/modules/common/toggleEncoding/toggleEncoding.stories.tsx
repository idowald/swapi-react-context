import { ToggleEncoding as ToggleEncodingComponent } from './toggleEncoding';
import { Encoding } from '../../../types/encoding';

export default {

  title: 'ToggleEncoding',
  component: ToggleEncodingComponent,
};
export function ToggleEncoding() {
  return <ToggleEncodingComponent selectedEncoding={Encoding.NORMAL} handleChange={() => null} />;
}
