import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Book-App</h1>
        <p>
          <a href="#">Github</a> | Second Project
        </p>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed by Mohammadreza with ❤️</p>
      </footer>
    </>
  );
}

export default Layout;
