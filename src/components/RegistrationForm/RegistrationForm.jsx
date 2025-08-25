import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

import css from './RegistrationForm.module.css';

const RegisterSchema = Yup.object().shape({
  name: Yup.string().min(2, 'At least 2 characters').required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'At least 6 characters').required('Password is required'),
});

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={RegisterSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={css.form}>
          <label className={css.label}>
            Name
            <Field type="text" name="name" className={css.input} />
            <ErrorMessage name="name" component="div" className={css.error} />
          </label>

          <label className={css.label}>
            Email
            <Field type="email" name="email" className={css.input} />
            <ErrorMessage name="email" component="div" className={css.error} />
          </label>

          <label className={css.label}>
            Password
            <Field type="password" name="password" className={css.input} />
            <ErrorMessage name="password" component="div" className={css.error} />
          </label>

          <button type="submit" className={css.button} disabled={isSubmitting}>
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
}
