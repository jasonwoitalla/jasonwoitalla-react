import * as React from "react";

import { Link } from "gatsby";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import * as styles from "./project.module.scss";

const Project = ({ title, image, tool, description, cta, link }) => {
  return (
    <div className={styles.container}>
      <Link to={link} className={styles.imageLink}>
        <div className={styles.image}>
          {image}
          <span>
            <FontAwesomeIcon icon={faCirclePlus} size="xl" />
          </span>
        </div>
      </Link>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.tool}>{tool}</div>
      <p className={styles.description}>{description}</p>
      <div className={styles.cta}>{cta}</div>
    </div>
  );
};

export default Project;
