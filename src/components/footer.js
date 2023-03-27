import * as React from "react";

import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import * as styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>Designed by Jason Woitalla | Powered by React</div>
      <div>
        <span className={styles.socialsLink}>Social Links</span>
        <div className={styles.tooltip}>
          <a
            className={styles.icon}
            href="https://www.linkedin.com/in/jason-woitalla/"
            target="_blank" >
            <FontAwesomeIcon icon={faLinkedin} size="xl" />
          </a>
          <span className={styles.tooltiptext}>LinkedIn Profile</span>
        </div>
        <div className={styles.tooltip}>
          <a className={styles.icon} href="https://github.com/jasonwoitalla" target="_blank">
            <FontAwesomeIcon icon={faGithub} size="xl" />
          </a>
          <span className={styles.tooltiptext}>GitHub Profile</span>
        </div>
        <div className={styles.tooltip}>
          <a className={styles.icon} href="/Jason-Woitalla-Resume.pdf" >
            <FontAwesomeIcon icon={faDownload} size="xl" />
          </a>
          <span className={styles.tooltiptext}>Resume</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
