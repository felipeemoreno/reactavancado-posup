import './App.css';

import AppHeader from './components/AppHeader';
import Container from '@mui/material/Container';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import CreateMoviePage from './pages/CreateMoviePage';
import ListMoviePage from './pages/ListMoviePage';

function App() {
  return (
  <>
    <BrowserRouter>
    <AppHeader />
        <Switch>
          <Route exact path="/">
            <ListMoviePage />
          </Route>
          <Route  path="/create">
            <CreateMoviePage/>
          </Route>
          <Route path="/rota3">
            Rota 3
          </Route>
          <Route>
            404
          </Route>
        </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
