import * as React from "react";

import Button from "../../components/button";
import Layout from "../../components/layout";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import * as styles from "./contact-me.module.scss";

const ContactMePage = () => {
  return (
    <Layout pageTitle="Contact Me" active="contact" fullHeight="true">
      <div className={styles.container}>
        <StaticImage
          src="../../images/circle-picture.jpg"
          alt="Contact Me Profile Image"
          width={350}
          quality={100}
          className={styles.image}
        />
        <h1 className={styles.header}>Jason Woitalla</h1>
        <Button link="/">View Resume</Button>
        <p className={styles.sub}>
          Contact me to if you would like to view my private GitHub
          repositories.
        </p>
        <div className={styles.linkRow}>
          <p>jason.woitalla@gmail.com</p>
          <p>507-581-1608</p>
          <p>
            <a href="https://github.com/jasonwoitalla" target="_blank">GitHub</a>
          </p>
          <p>
            <a href="https://www.linkedin.com/in/jason-woitalla/" target="_blank">
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default ContactMePage;
