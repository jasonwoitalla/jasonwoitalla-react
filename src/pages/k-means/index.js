import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Columns from "../../components/columns";
import Layout from "../../components/layout";

import * as styles from "./k-means.module.scss";
import Button from "../../components/button";

const KMeans = () => {
  return (
    <Layout pageTitle="K Means">
      <h1 className={styles.header}>K Means</h1>
      <p>
        K Means is a clustering algorithm that I’ve implemented using Python.
        The goal of K Means is to cluster a certain input of data into only k
        number of outputs. For my implementation, I used the input and output as
        an image file. I used ppm image files for simplicity. My K means will
        read in the input image and attempt to cluster all the colors into the k
        number of output colors. This sort of implementation has practical
        applications in image compression.
      </p>
      <Button link="/projects">Back to my Projects</Button>
      <Columns maxColumns="2">
        <div>
          <h2 className={styles.title}>Input</h2>
          <div className={styles.image}>
            <StaticImage
              src="../../images/k-means/input_1.jpg"
              alt="Input Image 1"
            />
          </div>
          <div className={styles.image}>
            <StaticImage
              src="../../images/k-means/input_2.jpg"
              alt="Input Image 2"
            />
          </div>
        </div>
        <div>
          <h2 className={styles.title}>Output</h2>
          <div className={styles.image}>
            <StaticImage
              src="../../images/k-means/output_1.jpg"
              alt="Input Image 1"
            />
          </div>
          <div className={styles.image}>
            <StaticImage
              src="../../images/k-means/output_2.jpg"
              alt="Input Image 2"
            />
          </div>
        </div>
      </Columns>
    </Layout>
  );
};

export default KMeans;
