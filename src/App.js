import { useState } from 'react';
import { Alert } from '@mui/material';

import AppHeader from './components/AppHeader';
import Container from '@mui/material/Container';

import CheckoutPage from './pages/CheckoutPage';

function App() {

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (response) => {
    if(response) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false)
      }, 20000);
    }
  }

  return (
    <div>
      {/* <CustomerForm /> */}
      <AppHeader/>
      <Container component="main">
        { formSubmitted && <Alert severity="success" sx={{ my: 5 }}>Compra efeturada com sucesso!</Alert> }
        <CheckoutPage handleSubmit={ handleSubmit } />
      </Container>
    </div>
  );
}

export default App;
