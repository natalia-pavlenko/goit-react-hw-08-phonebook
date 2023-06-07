import { useDispatch } from 'react-redux';

import { NavLink } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { ErrorMessageForm } from './RegisterForm.styled';
// import LoginForm from 'page/Login';
import { register } from 'redux/auth/operations';

const userSchema = Yup.object({
  name: Yup.string('Type your name').required('Name is required'),
  email: Yup.string('Type your email')
    .email('Type verify email')
    .required('Email is required'),
  password: Yup.string('Type your password')
    .min(5, 'Password must be with 5 length')
    .required('Password is required'),
});

const RegisterForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={userSchema}
        onSubmit={(values, { resetForm }) => {
          dispatch(register(values))
          resetForm();
        }}
      >
        <Form>
          <label>
            Name
            <Field type="text" name="name" />
          </label>

          <ErrorMessageForm component="p" name="name" />
          <label>
            Email
            <Field type="text" name="email" />
          </label>
          <ErrorMessageForm component="p" name="email" />
          <label>
            Password
            <Field type="text" name="password" />
          </label>
          <ErrorMessageForm component="p" name="password" />

          <button type="submit">Register</button>
        </Form>
      </Formik>
      <p>
        If you have an account <NavLink to="/login">Login</NavLink>
      </p>
    </>
  );
};

export default RegisterForm;