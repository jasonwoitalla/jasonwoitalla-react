import * as React from "react";

import * as styles from "./page-hero.module.scss";
import HeroImage from "./hero-image";
import Button from "./button";

const PageHero = ({ title, sub, buttonText, link, heroImage }) => {
  let button;
  if (buttonText) {
    button = (
      <Button link={link} buttonstyle="hero">
        {buttonText}
      </Button>
    );
  }

  return (
    <div className={styles.container}>
      <HeroImage image={heroImage} />
      <div className={styles.content}>
        <h1 className={styles.header}>{title}</h1>
        <p className={styles.subheader}>{sub}</p>
        {button}
      </div>
    </div>
  );
};

export default PageHero;
