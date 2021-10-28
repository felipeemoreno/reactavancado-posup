import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material/';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';

function AppHeader() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container component="nav">
          <Toolbar disableGutters>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Movies
            </Typography>

            <Button color="inherit" component={ Link } to="/" >Home</Button>
            <Button color="inherit" component={ Link } to="/create" >Cadastrar Filme</Button>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}

export default AppHeader;
