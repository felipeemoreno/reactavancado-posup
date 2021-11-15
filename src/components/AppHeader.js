import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material/';
import Container from '@mui/material/Container';
import { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';

function AppHeader() {

  const { user, logout } = useContext(AuthContext);
  const history = useHistory();

  function handlerClickLogout( event ) {
    logout();
    history.push("/");
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container component="nav">
          <Toolbar >
            <Typography variant="h6" component="div" sx={{ mr: 10  }}>
              Movies
            </Typography>
            <Box sx={{ flexGrow: 1}}>
              <Button color="inherit" component={ Link } to="/" >Home</Button>
              <Button color="inherit" component={ Link } to="/create" >Cadastrar Filme</Button>
            </Box>
            <Typography sx={{marginRight: '25px' }}>
              Olá { user.name }
            </Typography>
            <IconButton onClick={ handlerClickLogout } ><LogoutIcon /></IconButton>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}

export default AppHeader;
