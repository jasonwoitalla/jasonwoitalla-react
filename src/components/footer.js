import * as React from "react";
import { Link } from "gatsby";

import * as styles from "./footer.module.scss";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>Designed by Jason Woitalla | Powered by React</div>
      <div>
        <span className={styles.socialsLink}>Social Links</span>
        <Link
          className={styles.icon}
          to="https://www.linkedin.com/in/jason-woitalla/"
        >
          <FontAwesomeIcon icon={faLinkedin} size="xl" />
        </Link>
        <Link className={styles.icon} to="https://github.com/jasonwoitalla">
          <FontAwesomeIcon icon={faGithub} size="xl" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
