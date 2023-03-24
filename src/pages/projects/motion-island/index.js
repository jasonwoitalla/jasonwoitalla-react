import * as React from "react"

import Button from "../../../components/button";
import Layout from "../../../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import * as styles from "./motionisland.module.scss";
import Video from "../../../components/video";

const MotionIslandPage = () => {

    let pageHero = (
        <div style={{ marginTop:"100px" }}></div>
    );

    let toolImages = [
        <StaticImage src="../../../images/tools/godot.png" alt="Godot" quality={90} height={70} />,
        <StaticImage src="../../../images/tools/blender.png" alt="Blender" quality={90} height={70} />,
    ];

    return(<Layout pageTitle="Motion Planning Zoo" pageHero={pageHero} active="project">
        <h2>The Motion Planning Zoo</h2>
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
                <Button link="/projects/motion-island/report" internal={true}>
                    Demo <FontAwesomeIcon icon={faPlay} />
                </Button>
                <Button link="https://github.com/jasonwoitalla/csci5611-final-project" internal={false}>
                    Code <FontAwesomeIcon icon={faCode} />
                </Button>
            </div>
        </div>
        <h3>Description</h3>
        <p>
        For my final project in CSCI 5611: Animation and Planning in Games I decided to implement a 3d 
        demonstration scene. My scene is a 3D zoo that is home to a number of various creatures. These 
        creatures are free models that I found and are linked in my resources section.
        </p>
        <div className={styles.imageGrid}>
            <div style={{width:"704px", height:"396px"}}>
                <Video videoSrcURL="https://www.youtube.com/embed/PvBik2gbE4g" videoTitle="YouTube video player" />
            </div>
        </div>
    </Layout>);
}

export default MotionIslandPage;
