import './App.css';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { isAuthenticated } from './services/auth';

import AppHeader from './components/AppHeader';
import CreateMoviePage from './pages/CreateMoviePage';
import ListMoviePage from './pages/ListMoviePage';
import UpdateMoviePage from './pages/UpdateMoviePage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
  <>
    <BrowserRouter>
    { isAuthenticated() ? <AppHeader /> : null }
      <Switch>
        <PrivateRoute exact path="/">
          <ListMoviePage />
        </PrivateRoute>
        <PrivateRoute  path="/create">
          <CreateMoviePage/>
        </PrivateRoute>
        <PrivateRoute path="/update/:id/">
          <UpdateMoviePage />
        </PrivateRoute>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route>
          404
        </Route>
      </Switch>
    </BrowserRouter>
    </>
  );
}

const PrivateRoute = ({ children, ...rest }) => {
  return(
    <Route {...rest } >
      { isAuthenticated() ? children : <Redirect to="/login" /> }
    </Route>
  )
}


export default App;
