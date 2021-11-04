import React, { useState, useEffect } from 'react'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'
import Button  from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { useHistory } from 'react-router-dom';

import { authenticate } from '../services/api';
import { login, isAuthenticated } from '../services/auth';

const LoginPage = () => {

  const [fields, setFields ] = useState({ login: "",password: "" });
  const history = useHistory();

  useEffect(() => {
    if(isAuthenticated()) {
      history.push("/");
    }
  }, []);

  function handleChange(event) {
    const fieldName = event.target.name;
    const value = event.target.value;
    setFields({...fields, [fieldName]: value });
  }

  const handleSubmit = async event => {
    event.preventDefault();
    const response = await authenticate(fields.login, fields.password);

    if( response.status === 200 && response.data.auth === true ) {
      login(response.data.token);
      history.push("/");
    }

  }

  return (
    <Container maxWidth="xs" sx={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
      <Typography variant="h5" sx={{ mt: 5 }}>
        Entrar
      </Typography>
      <Box
      component="form"
      onSubmit={ handleSubmit }
      >

        <TextField
          margin="normal"
          label="Usuário"
          name="login"
          variant="outlined"
          fullWidth
          value={fields.login}
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          label="Senha"
          name="password"
          variant="outlined"
          type="password"
          fullWidth
          value={fields.password}
          onChange={handleChange}
        />
        <Button
          variant="contained"
          size="large"
          fullWidth
          type="submit"
          >
            Entrar
        </Button>
      </Box>
    </Container>
  )
}

export default LoginPage
