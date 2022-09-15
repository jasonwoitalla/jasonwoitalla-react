import * as React from "react";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

import * as styles from "./project.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Project = ({ title, image, tool, description, cta }) => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        {image}
        <span>
          <FontAwesomeIcon icon={faCirclePlus} size="xl" />
        </span>
      </div>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.tool}>{tool}</div>
      <p className={styles.description}>{description}</p>
      <div className={styles.cta}>{cta}</div>
    </div>
  );
};

export default Project;
