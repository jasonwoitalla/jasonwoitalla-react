import * as React from "react"

import Button from "../../../components/button";
import Layout from "../../../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import * as styles from "./webdev.module.scss";

const WebDevPage = () => {

    let pageHero = (
        <div style={{ marginTop:"100px" }}></div>
    );

    let toolImages = [
        <StaticImage src="../../../images/tools/wordpress.png" alt="Wordpress" quality={90} height={70} />,
        <StaticImage src="../../../images/tools/javascript.png" alt="JavaScript" quality={90} height={70} />,
        <StaticImage src="../../../images/tools/php.png" alt="PHP" quality={90} height={70} />,
        <StaticImage src="../../../images/tools/aws.png" alt="AWS" quality={90} height={70} />
    ];

    return(<Layout pageTitle="Web Development" pageHero={pageHero} active="project">
        <h2>Professional Web Development</h2>
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
                <Button link="https://marybleckwehl.com/" internal={false}>
                    marybleckwehl.com <FontAwesomeIcon icon={faPlay} />
                </Button>
                <Button link="https://toddcokennel.com/" internal={false}>
                    toddcokennel.com <FontAwesomeIcon icon={faPlay} />
                </Button>
            </div>
        </div>
        <h3>Description</h3>
        <p>
        I have helped two clients establish a strong online presence with custom-built websites that showcase 
        their unique brand and vision. The first website I developed was for Todd Co Kennel LLC, a company that 
        lists dogs up for adoption. The website was my first project as a developer, and I have come a long way 
        since then. I designed a user-friendly interface for browsing and filtering dog listings and integrated 
        the WordPress CMS to enable easy content updates. The second website I developed was a portfolio website 
        for Minnesota local author Mary Bleckwehl. Working closely with her, I brought her vision of her website 
        to life, integrating an online store and book reader. For both projects, I used the WordPress CMS to make 
        it easy for my clients to modify and add content without needing me. I still maintain these websites to 
        this day and have seen increased traffic and engagement as a result.
        </p>
        <div className={styles.imageGrid}>
            <div>
                <StaticImage src="../../../images/web-dev/mary-main.jpg" alt="marybleckwehl.com homepage" />
                <p>
                    The homepage of marybleckwehl.com. She is a local Minnesota author who contracted me to make a 
                    personal website for her. She is able to promote her books and events through a convenient CMS.
                </p>
            </div>
            <div>
                <StaticImage src="../../../images/web-dev/mary-books.png" alt="marybleckwehl.com books page" />
                <p>
                    Mary is able to update her books page herself through her CMS. Here you can easily View
                    all her new and old books and purchase them.
                </p>
            </div>
            <div>
                <StaticImage src="../../../images/web-dev/toddco-main.png" alt="toddcokennel.com homepage" />
                <p>
                    Todd Co Kennel LLC contracted me to make their website. There, they are able to post the
                    dogs and puppies they have for adoption. 
                </p>
            </div>
            <div>
                <StaticImage src="../../../images/web-dev/toddco-dog.png" alt="A dog up for adoption at toddcokennel.com" />
                <p>Dogs are easily listed for adoption through the CMS system they are able to use.</p>
            </div>
        </div>
    </Layout>);
}

export default WebDevPage;
