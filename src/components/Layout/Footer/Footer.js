import styles from "./Footer.module.css";

const Footer = () => {
  // Gets the current year
  const year = new Date().getFullYear();

  return (
    <div className={styles.footer}>
      <p>
        &copy; {year} | Made with love by Daniel Molina for Sngular and BBVA
      </p>
    </div>
  );
};

export default Footer;
