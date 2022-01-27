import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import * as React from 'react';
import { Encoding, EncodingType } from '../../../types/encoding';

interface Props{
    selectedEncoding : EncodingType;
    // eslint-disable-next-line
    handleChange : (encoding: EncodingType)=>void;
}
export function ToggleEncoding({ selectedEncoding, handleChange }: Props) {
  const onChange = (e:React.MouseEvent<HTMLElement>, value: any) => handleChange(value);

  return (
    <ToggleButtonGroup
      color="primary"
      value={selectedEncoding}
      exclusive
      onChange={onChange}
    >
      <ToggleButton value={Encoding.NORMAL}>Normal</ToggleButton>
      <ToggleButton value={Encoding.WOOKKIE}>Wookie</ToggleButton>
    </ToggleButtonGroup>
  );
}
