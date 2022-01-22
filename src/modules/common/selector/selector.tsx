import { Entities } from '../../../types/entity';

interface Props{
    label: string;
    name: string;
    // eslint-disable-next-line
    onChange : (entityType: Entities)=>void;
    options : string[];
    selected: string;
}

export function Selector({
  label, name, onChange, options, selected,
}:Props) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <select
        name={name}
        defaultValue={selected}
        onChange={(e) => onChange(e.target.value as Entities)}
      >
        {options.map((option) => <option key={option} value={option}>{option}</option>)}
      </select>
    </div>
  );
}
