import * as React from "react";
import { Link } from "gatsby";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import * as styles from "./button.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = ({ link, buttonstyle, onClick, children }) => {
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
};

export default Button;
