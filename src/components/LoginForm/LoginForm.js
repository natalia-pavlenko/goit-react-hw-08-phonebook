import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { ErrorMessageForm } from './LoginForm.styled';
import { logIn } from 'redux/auth/operations';



const userSchema = Yup.object({
  email: Yup.string('Type your email')
    .email('Type verify email')
    .required('Email is required'),
  password: Yup.string('Type your password')
    .min(5, 'Password must be with 5 length')
    .required('Password is required'),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: '',
    password: '',
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={userSchema}
        onSubmit={(values, { resetForm }) => {
          dispatch(logIn(values));
          resetForm();
        }}
      >
        <Form>
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

          <button type="submit">Login</button>
        </Form>
      </Formik>
      <p>
        If you don't have an account <NavLink to="/register">Register</NavLink>
      </p>
    </>
  );
};
export default LoginForm ;