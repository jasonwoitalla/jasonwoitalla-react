import * as React from "react"

import Button from "../../../components/button";
import Layout from "../../../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import * as styles from "./vrescaperoom.module.scss";
import Video from "../../../components/video";

const VREscapeRoomPage = () => {

    let pageHero = (
        <div style={{ marginTop:"100px" }}></div>
    );

    let toolImages = [
        <StaticImage src="../../../images/tools/unity.png" alt="Unity" quality={90} height={70} />,
        <StaticImage src="../../../images/tools/blender.png" alt="Blender" quality={90} height={70} />,
        <StaticImage src="../../../images/tools/c#.png" alt="C#" quality={90} height={70} />
    ];

    return(<Layout pageTitle="VR Escape Room" pageHero={pageHero} active="project">
        <h2>Virtual Reality Escape Room</h2>
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
                <Button link="/escape-room/VR-Escape-Room-Report.pdf" internal={false}>
                    Report <FontAwesomeIcon icon={faDownload} />
                </Button>
                <Button link="https://drive.google.com/drive/folders/1yemvl48GoVzJBm2JbyliXgwic_Ycadqf?usp=sharing" internal={false}>
                    Code <FontAwesomeIcon icon={faCode} />
                </Button>
            </div>
        </div>
        <h3>Description</h3>
        <p>
        The Virtual Reality Escape Room is an educational game that uses VR technology to teach math 
        skills to middle school students. Developed by me and one other person, we designed the game 
        with the intention of enhancing student engagement and retention of material. Research has shown 
        that VR can be an effective tool for education, and we wanted to create an immersive and interactive 
        learning experience. In the game, the user wears a VR headset and is placed in a math-themed 
        escape room. To leave the room, they must solve math puzzles to get closer to solving the final 
        clue. Our project uses the Oculus SDK and Unity 3D game engine to create a fully functional VR escape 
        room. For more details, watch the summary video below or read the full conference report linked on 
        this page.
        </p>
        <div className={styles.imageGrid}>
            <div style={{width:"704px", height:"396px"}}>
                <Video videoSrcURL="https://www.youtube.com/embed/xcRMUFoDRo8" videoTitle="YouTube video player" />
            </div>
        </div>
    </Layout>);
}

export default VREscapeRoomPage;
