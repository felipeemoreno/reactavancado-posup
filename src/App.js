import './App.css';
import CustomerForm from './components/CustomerForm';
import AppHeader from './components/AppHeader';
import Container from '@mui/material/Container';


import CreateMoviePage from './pages/CreateMoviePage';

function App() {
  return (
    <div>
      {/* <CustomerForm /> */}
      <AppHeader/>
      <Container component="main">
        <CreateMoviePage/>
      </Container>
    </div>
  );
}

export default App;
