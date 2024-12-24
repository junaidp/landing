import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>IT</div>
      <div className={styles.navLinks}>
        <a href="#services">Services</a>
        <a href="#success">Success Stories</a>
        <a href="#blog">Blog</a>
        <a href="#faqs">FAQs</a>
        <a href="#get-started" className={styles.getStarted}>
          Get Started
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
