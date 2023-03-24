import * as React from "react";

import Button from "./button";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";

import * as styles from "./ludum-dare-item.module.scss";

const LudumDareItem = ({
  title,
  date,
  theme,
  language,
  description,
  gitHubLink,
  playLink,
  image,
}) => {
  return (
    <div className={styles.container}>
      <Link to={playLink}>
        <div className={styles.image}>
          {image}
          <span>
            <FontAwesomeIcon icon={faPlay} size="xl" />
          </span>
        </div>
      </Link>
      <div className={styles.information}>
        <h2>{title}</h2>
        <p className={styles.date}>Submitted: {date}</p>
        <p className={styles.importantInfo}>Theme: {theme}</p>
        <p className={styles.importantInfo}>Language: {language}</p>
        <p className={styles.description}>{description}</p>
        <p className={styles.extraInfo}>
          Click the image if you want to play the game.
        </p>
        <Button link={gitHubLink} internal={false}>Source Code on GitHub</Button>
      </div>
    </div>
  );
};

export default LudumDareItem;
