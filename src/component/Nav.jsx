import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./nav.module.css";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <p className={styles.logo} onClick={closeMenu}>
          API<span>Toolkit</span>
        </p>

        <button
          className={`${styles.menuButton} ${menuOpen ? styles.menuOpen : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div
          className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ""}`}
        >
          <Link to="/" className={styles.navLink} onClick={closeMenu}>
            Home
          </Link>

          <Link
            to="/User_generator"
            className={styles.navLink}
            onClick={closeMenu}
          >
            User Generator
          </Link>

          <Link
            to="/Joke_generator"
            className={styles.navLink}
            onClick={closeMenu}
          >
            Joke Generator
          </Link>
          <Link
            to="/weather_search"
            className={styles.navLink}
            onClick={closeMenu}
          >
            Weather Search
          </Link>
          <Link to="/Country" className={styles.navLink} onClick={closeMenu}>
            Country Search
          </Link>
        </div>
      </div>
    </nav>
  );
}
