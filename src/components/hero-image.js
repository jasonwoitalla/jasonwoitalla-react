import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import * as styles from "./hero-image.module.scss";

const HeroImage = ({ image }) => {
  console.log("Hero Image: " + image);
  if (image === "person-typing") {
    return (
      <StaticImage
        className={styles.backgroundImage}
        src="../images/person-typing.jpg"
        alt="Hero Image Person Typing"
        quality={90}
        loading="eager"
      />
    );
  } else if (image === "computer-code") {
    return (
      <StaticImage
        className={styles.backgroundImage}
        src="../images/computer-code.jpg"
        alt="Computer with code"
        quality={90}
        loading="eager"
      />
    );
  }

  // no found hero image, return fragment
  return <></>;
};

export default HeroImage;
