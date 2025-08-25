import css from './Home.module.css';

export default function Home() {
  return (
    <div className={css.page}>
      <h1 className={css.title}>📖 Phonebook App</h1>
      <p className={css.text}>
        Welcome to your personal contact book.<br />
        Register or log in to start managing your contacts securely.
      </p>
    </div>
  );
}
