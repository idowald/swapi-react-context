import { styled } from '@mui/system';
import { CircularProgress } from '@mui/material';

interface Props{
    // eslint-disable-next-line
    display?: boolean;
}
const CenteredSpinner = styled(CircularProgress)(({ displayProp }:{displayProp: boolean}) => ({
  display: displayProp ? 'box' : 'none', position: 'absolute', top: '35%', left: '45%',
}));
export function Spinner({ display = true }:Props) {
  return <CenteredSpinner displayProp={display} />;
}
