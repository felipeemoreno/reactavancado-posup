
import React from 'react'
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

const CustomerForm = () => {

  const SignupSchema = Yup.object({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required('Required'),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required('Required'),
    email: Yup.string()
      .email('Invalid Email')
      .required('Required'),
    cpf: Yup.string()
      .min(11, "Too Short!")
      .max(14, "Too Long!")
      .matches(/([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/, 'Invalid CPF.')
      .required('Required'),
    birthdate: Yup.date()
      .max(new Date(), "Date can't be bigger than today")
      .required('Required'),
    genre: Yup.number()
      .required('Required.')
      .min(1, "Too Short!"),
    cellphone: Yup.string()
      .matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Enter a valid number.')
      .required('Required')
      .min(11, "DDD + Cellphone!")
      .max(11, "DDD + Cellphone!")
  });

  return (
    <div className="form">
      <h3>Customer Form</h3>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            cpf: '',
            birthdate: '',
            genre: '',
            cellphone: ''
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            alert("Dados Enviados");
          }}

        >
          {({ values, errors, touched, handleChange, handleBlur }) => (
            <>
              <Form>
                <div className="form-group">
                  <label>Nome: </label>
                  <Field type="text"
                  name="firstName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  />
                  <span>{touched.firstName && errors.firstName}</span>
                </div>
                <div className="form-group">
                  <label>Sobenome: </label>
                  <Field type="text" name="lastName" />
                  <span>{touched.lastName && errors.lastName}</span>
                </div>
                <div className="form-group">
                  <label>Cpf: </label>
                  <Field type="text" name="cpf" />
                  <span>{touched.cpf && errors.cpf}</span>
                </div>
                <div className="form-group">
                  <label>E-mail: </label>
                  <Field type="email" name="email" />
                  <span>{touched.email && errors.email}</span>
                </div>
                <div className="form-group">
                  <label>Data nascimento: </label>
                  <Field type="date" name="birthdate" />
                  <span>{touched.birthdate && errors.birthdate}</span>
                </div>
                <div className="form-group">
                  <label>Gênero: </label>
                  <Field as="select"
                  name="genre"
                  value={values.genre}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  >
                    <option value="">Selecione</option>
                    <option value="1">Masculino</option>
                    <option value="2">Feminino</option>
                  </Field>
                  <span>{touched.genre && errors.genre}</span>
                </div>
                <div className="form-group">
                  <label>Celular</label>
                  <Field
                  type="text" name="cellphone" />
                  <span>{touched.cellphone && errors.cellphone}</span>
                </div>
                <div className="form-group">
                  <input type="submit" value="Enviar" />
                </div>
            </Form>
          </>
            )}
        </Formik>
    </div>
  )
}

export default CustomerForm;
