import AppBar from '../AppBar/AppBar';

export default function Layout({ children }) {
  return (
    <>
      <AppBar />
      <main>{children}</main>
    </>
  );
}
