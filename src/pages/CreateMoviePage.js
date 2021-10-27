import { useState, setState } from 'react'
import { Box, Typography, TextField, Grid, Button } from '@mui/material';

import { createMovie } from '../services/api'


function CreateMoviePage() {

  const movie = {
    title: "",
    director: "",
    writers: "",
    releaseDate: "",
    timeDuration: ""
  }

  const [ fields, setFields ] = useState(movie);

  function handleChange(event) {
    const fieldName = event.target.name;
    const value = event.target.value;
    setFields({...fields, [fieldName]: value });
  }

  async function handleSubmit (event) {
    event.preventDefault();
    console.log(fields);
    const response = await createMovie(fields);

    if(response.status === 200 ) {
      setFields(movie);
    }
  }

  return (
    <Box
    component="form"
    onSubmit={ handleSubmit }
    sx={{ mt: 5 }}
    >
      <Typography variant="h4">
        Novo Filme
      </Typography>
      <Grid container spacing={3} sx={{ mt: 2 }}>
        <Grid item sm={12}>
          <TextField
            name="title"
            variant="outlined"
            label="Título"
            onChange={ handleChange }
            value={fields.title}
            fullWidth
          />
        </Grid>
        <Grid item sm={6}>
          <TextField
            name="director"
            variant="outlined"
            label="Diretor"
            fullWidth
            onChange={ handleChange }
            value={fields.director}
          />
        </Grid>
        <Grid item sm={6}>
          <TextField
            name="writers"
            variant="outlined"
            label="Roteiristas"
            fullWidth
            onChange={ handleChange }
            value={fields.writers}
          />
        </Grid>
        <Grid item sm={6}>
          <TextField
            name="releaseDate"
            variant="outlined"
            label="Data Lançamento"
            fullWidth
            onChange={ handleChange }
            value={fields.releaseDate}
          />
        </Grid>
        <Grid item sm={6}>
          <TextField
            name="timeDuration"
            variant="outlined"
            label="Tempo de Duração"
            fullWidth
            onChange={ handleChange }
            value={fields.timeDuration}
          />
        </Grid>
        <Grid item sm={12}>
          <Button
          variant="contained"
          type="submit"
          fullWidth
          onChange={ handleChange }
          >
            Cadastrar Filme
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}

export default CreateMoviePage;
