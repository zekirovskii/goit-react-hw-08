import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import css from './ContactForm.module.css';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[A-Za-zÇĞİÖŞÜçğıöşü\s]+$/, 'Only letters and spaces are allowed')
    .min(2, 'Name must be at least 2 characters')
    .max(40, 'Name must be 40 characters or less')
    .required('Name is required'),
  number: Yup.string()
    .matches(/^\+?\d{7,15}$/, 'Enter a valid phone number (7–15 digits, optional +)')
    .required('Phone number is required'),
});

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      await dispatch(addContact(values));
      resetForm();            // <-- name ve number'ı initialValues'a döndürür
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}  // <-- 'number'
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={css.form} autoComplete="off">
          <label className={css.label}>
            Name
            <Field name="name" type="text" className={css.input} />
            <ErrorMessage name="name" component="div" className={css.error} />
          </label>

          <label className={css.label}>
            Phone
            <Field
              name="number"               // <-- 'number' (phone değil)
              type="tel"
              inputMode="tel"
              className={css.input}
            />
            <ErrorMessage name="number" component="div" className={css.error} />
          </label>

          <button type="submit" className={css.button} disabled={isSubmitting}>
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
}
