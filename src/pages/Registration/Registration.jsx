import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import css from './Registration.module.css';

export default function Registration() {
  return (
    <div className={css.page}>
      <h2 className={css.title}>Register</h2>
      <RegistrationForm />
    </div>
  );
}
