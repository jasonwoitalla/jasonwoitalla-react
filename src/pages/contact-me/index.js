import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import Layout from "../../components/layout";

import * as styles from "./contact-me.module.scss";
import Button from "../../components/button";

const ContactMePage = () => {
  return (
    <Layout pageTitle="Contact Me" active="contact" fullHeight="true">
      <div className={styles.container}>
        <StaticImage
          src="../../images/circle-picture.jpg"
          alt="Contact Me Profile Image"
          width={350}
          className={styles.image}
        />
        <h1 className={styles.header}>Jason Woitalla</h1>
        <Button link="/">View Resume</Button>
        <p className={styles.sub}>
          Contact me to if you would like to view my private GitHub
          repositories.
        </p>
        <div className={styles.linkRow}>
          <p>woita016@umn.edu</p>
          <p>507-581-1608</p>
          <p>
            <Link to="https://github.com/jasonwoitalla">GitHub</Link>
          </p>
          <p>
            <Link to="https://www.linkedin.com/in/jason-woitalla/">
              LinkedIn
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default ContactMePage;
