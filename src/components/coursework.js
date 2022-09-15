import * as React from "react";
import { Link } from "gatsby";

import * as styles from "./coursework.module.scss";

const Coursework = ({ title, description, cta, link }) => {
  return (
    <div>
      <p className={styles.title}>{title}</p>
      <p>{description}</p>
      <Link to={link} className={styles.cta}>
        {cta}
      </Link>
    </div>
  );
};

export default Coursework;
