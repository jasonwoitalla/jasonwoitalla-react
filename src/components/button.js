import * as React from "react";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import * as styles from "./button.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = ({ link, buttonstyle, children }) => {
  return (
    <div className={styles.buttonContainer}>
      <a className={styles.button} href={link} buttonstyle={buttonstyle}>
        {children}
        <span>
          <FontAwesomeIcon icon={faChevronRight} />
        </span>
      </a>
    </div>
  );
};

export default Button;
