import { Box, Typography, TextField, Grid, Button } from '@mui/material';


function CreateMoviePage() {

  function handleSubmit (event) {
    event.preventDefault();
    console.log(event.target);
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
            variant="outlined"
            label="Título"
            fullWidth
          />
        </Grid>
        <Grid item sm={6}>
          <TextField
            variant="outlined"
            label="Diretor"
            fullWidth
          />
        </Grid>
        <Grid item sm={6}>
          <TextField
            variant="outlined"
            label="Roteiristas"
            fullWidth
          />
        </Grid>
        <Grid item sm={6}>
          <TextField
            variant="outlined"
            label="Data Lançamento"
            fullWidth
          />
        </Grid>
        <Grid item sm={6}>
          <TextField
            variant="outlined"
            label="Tempo de Duração"
            fullWidth
          />
        </Grid>
        <Grid item sm={12}>
          <Button
          variant="contained"
          type="submit"
          fullWidth
          >
            Cadastrar Filme
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}

export default CreateMoviePage;
