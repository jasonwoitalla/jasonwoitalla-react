import * as React from "react";
import { Link } from "gatsby";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

import * as styles from "./homepage-project-item.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HomepageProjectItem = ({ title, description, linkText, href, image }) => {
  return (
    <div className={styles.container}>
      <Link to={href}>
        <div className={styles.image}>
          {image}
          <span>
            <FontAwesomeIcon icon={faCirclePlus} size="xl" />
          </span>
        </div>
      </Link>
      <h3 className={styles.title}>
        <Link to={href}>{title}</Link>
      </h3>
      <p className={styles.description}>{description}</p>
      <p style={{ textAlign: "center" }}>
        <Link to={href} className={styles.link}>
          {linkText}
        </Link>
      </p>
    </div>
  );
};

export default HomepageProjectItem;
