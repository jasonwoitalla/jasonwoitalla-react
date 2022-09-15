import * as React from "react";
import ProgressBar from "./progress-bar";

import * as styles from "./skill-section.module.scss";

const SkillSection = ({ title, items }) => {
  return (
    <>
      <h3>{title}</h3>
      {items.map((skill) => (
        <div className={styles.progress}>
          <ProgressBar label={skill[0]} progress={skill[1]} />
        </div>
      ))}
    </>
  );
};

export default SkillSection;
