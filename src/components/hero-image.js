import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import * as styles from "./hero-image.module.scss";

const HeroImage = ({ image }) => {
  console.log("Hero Image: " + image);
  if (image === "person-typing") {
    return (
      <div className={styles.backgroundImage}>
        <StaticImage
          src="../images/person-typing.jpg"
          alt="Hero Image Person Typing"
          quality={90}
          loading="eager"
        />
      </div>
    );
  } else if (image === "computer-code") {
    return (
      <div className={styles.backgroundImage}>
        <StaticImage
          src="../images/computer-code.jpg"
          alt="Computer with code"
          quality={90}
          loading="eager"
        />
      </div>
    );
  }

  // no found hero image, return fragment
  return <></>;
};

export default HeroImage;
