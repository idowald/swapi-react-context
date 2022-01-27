import { styled } from '@mui/system';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Entities } from '../../../types/entity';

interface Props{
    name: string;
    // eslint-disable-next-line
    onChange : (entityType: Entities)=>void;
    options : string[];
    selected: string;
}
const MarginedForm = styled(FormControl)({ marginTop: '-5px' });
export function Selector({
  name, onChange, options, selected,
}:Props) {
  return (
    <MarginedForm>
      <RadioGroup
        row
        aria-labelledby="row-radio-buttons-group-label"
        defaultValue={selected}
        onChange={(e) => onChange(e.target.value as Entities)}
        name={name}
      >
        {options.map((option) => (
          <FormControlLabel
            key={option}
            value={option}
            control={<Radio />}
            label={option}
          />
        ))}
      </RadioGroup>
    </MarginedForm>
  );
}
