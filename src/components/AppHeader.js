import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material/';
import Container from '@mui/material/Container';
import { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

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
              <Button color="inherit" onClick={ handlerClickLogout } >Logout</Button>
            </Box>
            <Typography>
              Olá { user.name }
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}

export default AppHeader;
