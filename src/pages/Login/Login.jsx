import LoginForm from '../../components/LoginForm/LoginFrom';
import css from './Login.module.css';

export default function Login() {
  return (
    <div className={css.page}>
      <h2 className={css.title}>Login</h2>
      <LoginForm />
    </div>
  );
}
