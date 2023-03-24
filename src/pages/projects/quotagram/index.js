import * as React from "react"

import Button from "../../../components/button";
import Layout from "../../../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import * as styles from "./quotagram.module.scss";

const QuotagramPage = () => {

    let pageHero = (
        <div style={{ marginTop:"100px" }}></div>
    );

    let toolImages = [
        <StaticImage src="../../../images/tools/flask.png" alt="Flask" quality={90} height={70} />,
        <StaticImage src="../../../images/tools/javascript.png" alt="JavaScript" quality={90} height={70} />,
        <StaticImage src="../../../images/tools/postgresql.png" alt="PostgreSQL" quality={90} height={70} />
    ];

    return(<Layout pageTitle="Quotagram.com" pageHero={pageHero} active="project">
        <h2>Quotagram.com</h2>
        <h3>Tools</h3>
        <div className={styles.toolsContainer}>
            <div className={styles.tools}>
                {toolImages.map((tool) => (
                    <div className={styles.tool}>
                        {tool}
                    </div>
                ))}
            </div>
            <div className={styles.actionButtons}>
                <Button link="https://quotagram.onrender.com" internal={false}>
                    Demo <FontAwesomeIcon icon={faPlay} />
                </Button>
                <Button link="https://github.com/jasonwoitalla/Quotagram" internal={false}>
                    Code <FontAwesomeIcon icon={faCode} />
                </Button>
            </div>
        </div>
        <h3>Description</h3>
        <p>
        Quotagram is a social media platform developed by me and a team of four others. It started as 
        my app idea to help my friend groups stay in touch. In the past, we have had physical quote 
        boards to keep track of funny quotes that people have said. However, as we drift physically 
        away from each other it gets harder and harder to have communal meeting spaces for these 
        quote boards to live. That is why I wanted to develop an app so that we can all keep our 
        quirky quote boards alive and accessible. Developed in Flask on the backend and JavaScript 
        on the frontend Quotagram is a fully featured web app. Please try it out by logging in with 
        your Gmail account and posting a quote. 
        </p>
        <div className={styles.imageGrid}>
            <div>
                <StaticImage src="../../../images/quotagram/quotagram_homepage.png" alt="Quotagram Homepage" />
                <p>The homepage of quotagram</p>
            </div>
            <div>
                <StaticImage src="../../../images/quotagram/quotagram_profile.jpg" alt="Quotagram Profile page" />
                <p>The dynamic quote board styled homepage of Quotagram.</p>
            </div>
            <div>
                <StaticImage src="../../../images/quotagram/quote_modal.png" alt="View quote modal" />
                <p>Clicking on a quote gives you all the information you need displayed in this modal.</p>
            </div>
            <div>
                <StaticImage src="../../../images/quotagram/create_post.png" alt="Create a new post modal." />
                <p>Creating a new post is as easy as having a Google account and filling out this small form.</p>
            </div>
        </div>
    </Layout>);
}

export default QuotagramPage;
