import styles from "./Footer.module.css";

const Footer = () => {
  // Gets the current year
  const year = new Date().getFullYear();

  return (
    <div className={styles.footer}>
      <p>
        &copy; {year} | Made with love by &nbsp;
        <a href="https://github.com/Molina-Daniel" target="_blank" rel="github">
          Daniel Molina
        </a>
        &nbsp; for Sngular and BBVA
      </p>
    </div>
  );
};

export default Footer;
