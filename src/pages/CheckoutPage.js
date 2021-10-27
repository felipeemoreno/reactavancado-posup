import React from 'react'
import { Box, Typography, TextField, Grid, Button } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { checkout } from '../services/api';
import valid from 'card-validator';

const formFields =  {
  firstName: '',
  lastName: '',
  cpf: '',
  address: "",
  city: '',
  state: '',
  postalcode: '',
  cardName: '',
  cardNumber: '',
  cardExpirationDate: '',
  cardCVV: '',
}

const validationSchema = Yup.object({
  firstName: Yup.string()
  .min(3, "Too Short!")
  .max(50, "Too Long!")
  .required('Required'),
lastName: Yup.string()
  .min(3, "Too Short!")
  .max(50, "Too Long!")
  .required('Required'),
cpf: Yup.string()
  .min(11, "Too Short!")
  .max(14, "Too Long!")
  .matches(/([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/, 'Invalid CPF.')
  .required('Required'),
address: Yup.string()
  .min(3, "Too Short!")
  .max(50, "Too Long!")
  .required('Required'),
city: Yup.string()
  .min(3, "Too Short!")
  .max(50, "Too Long!")
  .required('Required'),
state: Yup.string()
  .min(2, "Too Short!")
  .max(30, "Too Long!")
  .required('Required'),
postalcode: Yup.string()
  .min(3, "Too Short!")
  .max(9, "Too Long!")
  .required('Required'),
cardName: Yup.string()
.test("test-name", "Invalid Name", value => valid.cardholderName(value).isValid)
  .required('Required'),
cardNumber: Yup.string()
  .test("test-number", "Invalid card number", value => valid.number(value).isValid)
  .required('Required'),
cardExpirationDate: Yup.string()
  .test("test-expiration", "Invalid Date", value => valid.expirationDate(value).isValid)
  .required('Required'),
cardCVV: Yup.string()
  .test("test-cvv", "Invalid CVV", value => valid.cvv(value).isValid)
  .required('Required'),
});

function CheckoutPage( props ) {

  const handleSubmit = props.handleSubmit;

  const formik = useFormik({
    initialValues: formFields,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const checkoutResponse = await checkout(values);

     if ( checkoutResponse.status === 201 ) {
      handleSubmit(true);
      formik.resetForm( {
        values: formFields
      })
     }
    },
  });

  return (
    <Box
    component="form"
    onSubmit={ formik.handleSubmit }
    sx={{ mt: 5 }}

    >
      <Typography variant="h4">
        Dados Pessoais
      </Typography>
      <Grid container spacing={3} sx={{ mt: 1, mb:5 }}>
        <Grid item sm={6}>
          <TextField
            variant="outlined"
            id="firstName"
            name="firstName"
            label="Nome"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
            fullWidth
          />
        </Grid>
        <Grid item sm={6}>
          <TextField
            variant="outlined"
            id="lastName"
            name="lastName"
            label="sobrenome"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
            fullWidth
          />
        </Grid>
        <Grid item sm={6}>
          <TextField
            variant="outlined"
            id="cpf"
            name="cpf"
            label="Cpf"
            value={formik.values.cpf}
            onChange={formik.handleChange}
            error={formik.touched.cpf && Boolean(formik.errors.cpf)}
            helperText={formik.touched.cpf && formik.errors.cpf}
            fullWidth
          />
        </Grid>
      </Grid>
      <Typography variant="h4">
        Endereço de Entrega
      </Typography>
      <Grid container spacing={3} sx={{ mt: 1, mb:5 }}>
        <Grid item sm={12}>
          <TextField
            variant="outlined"
            id="address"
            name="address"
            label="Endereço"
            value={formik.values.address}
            onChange={formik.handleChange}
            error={formik.touched.address && Boolean(formik.errors.address)}
            helperText={formik.touched.address && formik.errors.address}
            fullWidth
          />
        </Grid>
        <Grid item sm={6}>
          <TextField
            variant="outlined"
            id="city"
            name="city"
            label="Cidade"
            value={formik.values.city}
            onChange={formik.handleChange}
            error={formik.touched.city && Boolean(formik.errors.city)}
            helperText={formik.touched.city && formik.errors.city}
            fullWidth
          />
        </Grid>
        <Grid item sm={6}>
          <TextField
            variant="outlined"
            id="state"
            name="state"
            label="Estado"
            value={formik.values.state}
            onChange={formik.handleChange}
            error={formik.touched.state && Boolean(formik.errors.state)}
            helperText={formik.touched.state && formik.errors.state}
            fullWidth
          />
        </Grid>
        <Grid item sm={6}>
          <TextField
            variant="outlined"
            id="postalcode"
            name="postalcode"
            label="CEP"
            value={formik.values.postalcode}
            onChange={formik.handleChange}
            error={formik.touched.postalcode && Boolean(formik.errors.postalcode)}
            helperText={formik.touched.postalcode && formik.errors.postalcode}
            fullWidth
          />
        </Grid>
      </Grid>
      <Typography variant="h4">
        Dados Pagamento Cartão
      </Typography>
      <Grid container spacing={3} sx={{ mt: 1, mb:5 }}>
        <Grid item sm={12}>
          <TextField
            variant="outlined"
            id="cardName"
            name="cardName"
            label="Nome no Cartão"
            value={formik.values.cardName}
            onChange={formik.handleChange}
            error={formik.touched.cardName && Boolean(formik.errors.cardName)}
            helperText={formik.touched.cardName && formik.errors.cardName}
            fullWidth
          />
        </Grid>
        <Grid item sm={12}>
          <TextField
            variant="outlined"
            id="cardNumber"
            name="cardNumber"
            label="Numero Cartão"
            value={formik.values.cardNumber}
            onChange={formik.handleChange}
            error={formik.touched.cardNumber && Boolean(formik.errors.cardNumber)}
            helperText={formik.touched.cardNumber && formik.errors.cardNumber}
            fullWidth
          />
        </Grid>
        <Grid item sm={6}>
          <TextField
            variant="outlined"
            id="cardExpirationDate"
            name="cardExpirationDate"
            label="Data Expiração"
            value={formik.values.cardExpirationDate}
            onChange={formik.handleChange}
            error={formik.touched.cardExpirationDate && Boolean(formik.errors.cardExpirationDate)}
            helperText={formik.touched.cardExpirationDate && formik.errors.cardExpirationDate}
            fullWidth
          />
        </Grid>
        <Grid item sm={6}>
          <TextField
            variant="outlined"
            id="cardCVV"
            name="cardCVV"
            label="CVV"
            value={formik.values.cardCVV}
            onChange={formik.handleChange}
            error={formik.touched.cardCVV && Boolean(formik.errors.cardCVV)}
            helperText={formik.touched.cardCVV && formik.errors.cardCVV}
            fullWidth
          />
        </Grid>
      </Grid>
      <Grid container spacing={3} sx={{ mt: 2 }}>
        <Grid item sm={12}>
          <Button
          variant="contained"
          type="submit"
          fullWidth
          >
            Comprar
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}

export default CheckoutPage;
