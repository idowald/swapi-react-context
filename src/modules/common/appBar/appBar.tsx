import { Logout } from '@mui/icons-material';

import {
  AppBar as AppBarComponent, Box, Typography, Button, Toolbar,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../authentication/hooks/useAuth';
import { useStarWars } from '../../starWars/hooks/useStarWars';

export function AppBar() {
  const { username } = useAuth();
  const { entityType } = useStarWars();
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBarComponent position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            StarWars API
          </Typography>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            {entityType}
          </Typography>
          <Button color="inherit" onClick={() => navigate('/logout')}>
            {username}
            <Logout />
          </Button>
        </Toolbar>
      </AppBarComponent>
    </Box>
  );
}
