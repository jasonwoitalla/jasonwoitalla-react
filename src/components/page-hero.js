import * as React from "react";

import Button from "./button";
import { Gradient } from '../../static/Gradient';
import HeroImage from "./hero-image";

import * as styles from "./page-hero.module.scss";

const PageHero = ({ title, sub, buttonText, link, heroImage, useGradient, customHeight="45vh" }) => {
  let button;
  if (buttonText) {
    button = (
      <Button link={link} buttonstyle="hero">
        {buttonText}
      </Button>
    );
  }

  const COLORS = [
    "#f7accf",
    "#e8f0ff",
    "#6874e8",
    "#7a5c61"
  ];

  React.useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient('#gradient-canvas'); 
  }, []);

  return (<div className={styles.container} style={{height:customHeight}}>
    <canvas id="gradient-canvas" className={styles.gradient}></canvas>
    <div className={styles.content}>
        <h1 className={styles.header}>{title}</h1>
        <p className={styles.subheader}>{sub}</p>
        {button}
      </div>
  </div>);

  if(!useGradient) {
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
  } else {
    
  }
};

export default PageHero;
