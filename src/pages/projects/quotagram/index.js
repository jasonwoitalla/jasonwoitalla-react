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
        Do you and your friends have inside jokes or funny quotes that you want to keep alive? 
        Introducing Quotagram, a social media platform that lets you create and share your own 
        quote board with your friends no matter where you are. Originally conceived as an app idea 
        to help my friend group stay in touch, Quotagram is now a fully featured web app developed 
        by me and a team of four others. With Quotagram, you can create and customize your own quote 
        boards, browse and like quotes posted by others, and even receive notifications when your 
        friends post new quotes. Quotagram's backend was built with Flask to handle user 
        authentication and data storage, while the frontend was built with JavaScript to create a 
        responsive and intuitive user interface.
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
