import * as React from "react";

import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";

import * as styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>Designed by Jason Woitalla | Powered by React</div>
      <div>
        <span className={styles.socialsLink}>Social Links</span>
        <a
          className={styles.icon}
          href="https://www.linkedin.com/in/jason-woitalla/"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} size="xl" />
        </a>
        <a className={styles.icon} href="https://github.com/jasonwoitalla" target="_blank">
          <FontAwesomeIcon icon={faGithub} size="xl" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
