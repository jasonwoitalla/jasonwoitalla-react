import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";
import * as React from "react";
import * as styles from "./button.module.scss";

const Button = ({ link, buttonstyle, onClick, children, internal=true }) => {
  if(internal) {
    return (
      <div className={styles.buttonContainer}>
        <Link to={link} className={styles.button} buttonstyle={buttonstyle}>
          {children}
          <span>
            <FontAwesomeIcon icon={faChevronRight} />
          </span>
        </Link>
      </div>
    );
  } else {
    return (
      <div className={styles.buttonContainer}>
        <a href={link} className={styles.button} buttonstyle={buttonstyle} target="_blank">
          {children}
          <span>
            <FontAwesomeIcon icon={faChevronRight} />
          </span>
        </a>
      </div>
    );
  }
};

export default Button;
