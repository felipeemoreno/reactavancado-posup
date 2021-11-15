import React, { useState, useEffect} from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import { getMovies, deleteMovie } from '../services/api';
import Container from '@mui/material/Container';



const columns = [
  { field: 'title', headerName: 'Titulo do Filme', width: 300 },
  { field: 'director', headerName: 'Diretor', width: 150 },
  { field: 'writers', headerName: 'Roteiristas', width: 150 },
  { field: 'releaseDate', headerName: 'Data de Lançamento', width: 150 },
  { field: 'timeDuration', headerName: 'Duração', width: 150 },
];



const ListMoviePage = () => {

  const [rows, setRows ] = useState([]);
  const [rowsSelected, setRowsSelected] = useState([]);

  useEffect(() => {
    getMoviesFromApi();
    document.title = "Listar";
  },[]);


  async function getMoviesFromApi() {
    const response = await getMovies();
    const data = response.data.map((movie) => {
      movie.id = movie.movieId;
      return movie;
    })
    setRows(data);
  }

  const handleClickDelete = async (event) => {
    const promises = rowsSelected.map( async (row, idx) => await deleteMovie(row));

    await Promise.all(promises);

    getMoviesFromApi();
  }

  return (
    <Container component="main">
      <Box
      component="form"
      // onSubmit={ handleSubmit }
      sx={{ mt: 5 }}
      >
        <Typography variant="h4">
          Filmes
        </Typography>
        <Button
          sx={{my:4}}
          color="error"
          variant="contained"
          onClick={ handleClickDelete
          }>Deletar</Button>
        <div style={{ height: 300, width: '100%'}}>
          <DataGrid
            rows={rows}
            columns={columns}
            checkboxSelection
            onSelectionModelChange={(selectionModel) => {
              setRowsSelected(selectionModel);
            }}
          />
        </div>
      </Box>
    </Container>
  )
}

export default ListMoviePage;
