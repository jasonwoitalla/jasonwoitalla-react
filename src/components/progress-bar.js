import * as React from "react";
import useIntersection from "../hooks/useIntersection";

import * as styles from "./progress-bar.module.scss";

const ProgressBar = ({ label, progress }) => {
  const ref = React.useRef();
  const inViewport = useIntersection(ref, "-50px");

  return (
    <div ref={ref} className={styles.container}>
      <div className={styles.label}>{label}</div>
      <span className={styles.background}>
        <span
          className={styles.progress}
          style={{ width: inViewport ? progress : "0%" }}
        >
          <span className={styles.progressLabel}>{progress}</span>
        </span>
      </span>
    </div>
  );
};

export default ProgressBar;
