import * as React from "react";

import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import * as styles from "./header.module.scss";

const Header = ({ active = "home", title = "Jason Woitalla.com" }) => {
  const [isMobileOpen, setMobileOpen] = React.useState(false);
  const [isShrunk, setShrunk] = React.useState(false);
  const [isMenuHover, setMenuHover] = React.useState(false);

  React.useEffect(() => {
    const handler = () => {
      setShrunk((isShrunk) => {
        if (window.innerWidth <= 800) {
          return false;
        }

        if (
          !isShrunk &&
          (document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20)
        ) {
          return true;
        }

        if (
          isShrunk &&
          document.body.scrollTop < 4 &&
          document.documentElement.scrollTop < 4
        ) {
          return false;
        }

        return isShrunk;
      });
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header className={styles.header} is-shrunk={`${isShrunk}`}>
      <Helmet>
        <title>{title} | jasonwoitalla.com</title>
      </Helmet>
      <Link to="/" className={styles.logo}>
        <StaticImage
          src="../images/logo.png"
          alt="jasonwotialla.com"
          width={260}
        />
      </Link>
      <nav className={styles.navigation}>
        <ul className={styles.menu}>
          <li id="home" active={active === "home" ? "true" : "false"}>
            <Link to="/">Resume</Link>
          </li>
          <li
            id="projects"
            active={active === "project" ? "true" : "false"}
            onMouseEnter={() => setMenuHover(true)}
            onMouseLeave={() => setMenuHover(false)}
          >
            <Link to="/projects">Projects</Link>
            <ul
              className={styles.submenu}
              id="submenu"
              style={{
                display: isMenuHover ? "block" : "none",
                paddingTop: isShrunk ? "16px" : "16px",
                animation: isMenuHover ? "fadeDownIn" : "none",
              }}
            >
              <li id="sub-projects">
                <Link to="/projects">Projects</Link>
              </li>
              <li id="sub-quotagram">
                <Link to="/projects/quotagram">Quotagram</Link>
              </li>
              <li id="sub-vr">
                <Link to="/projects/vr-escaperoom">Virtual Reality</Link>
              </li>
              <li id="sub-motion">
                <Link to="/projects/motion-island">Motion Planning</Link>
              </li>
              <li id="sub-web">
                <Link to="/projects/web-development">Web Development</Link>
              </li>
              <li id="sub-ludum">
                <Link to="/ludum-dare">Ludum Dare</Link>
              </li>
            </ul>
          </li>
          <li id="contact" active={active === "contact" ? "true" : "false"}>
            <Link to="/contact-me">Contact Me</Link>
          </li>
        </ul>
        <ul
          className={styles.menuMobile}
          style={{ display: isMobileOpen ? "flex" : "none" }}
        >
          <li id="home">
            <Link to="/">Resume</Link>
          </li>
          <li id="projects">
            <Link to="/projects">Projects</Link>
          </li>
          <li id={styles.sub}>
            <Link to="/projects">Projects</Link>
          </li>
          <li id={styles.sub}>
            <Link to="/projects/quotagram">Quotagram</Link>
          </li>
          <li id={styles.sub}>
            <Link to="/projects/vr-escaperoom">Virtual Reality</Link>
          </li>
          <li id={styles.sub}>
            <Link to="/projects/motion-island">Motion Planning</Link>
          </li>
          <li id={styles.sub}>
            <Link to="/projects/web-development">Web Development</Link>
          </li>
          <li id={styles.sub}>
            <Link to="/ludum-dare">Ludum Dare</Link>
          </li>
          <li id="contact">
            <Link to="/contact-me">Contact Me</Link>
          </li>
        </ul>
        <button
          className={styles.hamburgerMenu}
          onClick={() => setMobileOpen((current) => !current)}
        >
          <FontAwesomeIcon icon={isMobileOpen ? faXmark : faBars} size="xl" />
        </button>
      </nav>
    </header>
  );
};

export default Header;
