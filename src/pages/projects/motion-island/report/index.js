import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Columns from '../../../../components/columns';
import Divider from '../../../../components/divider';
import Layout from '../../../../components/layout';

import * as styles from './report.module.scss';

const MotionIslandReport = () => {
    return (<Layout pageTitle="Motion Planning Island Report" active="project">
        <h1 className={styles.title}>The Motion Planning Zoo</h1>
        <p style={{fontWeight:"bold"}}>Written by: Jason Woitalla</p>
        <p>
            For my final project in CSCI 5611: Animation and Planning in Games I 
            decided to implement a 3d demonstration scene. My scene is a 3D zoo that is home 
            to a number of various creatures. These creatures are free models that I found and 
            are linked in my resources section.
        </p>
        <Divider />
        <h2>Demo</h2>
        <h3>The Algorithms</h3>
        <p>
            There were several key algorithms that went into this project. The project serves as a 
            host to different algorithms and many more can be implemented in the future. There were a 
            few key ones that were used. BOIDS was the first motion algorithm that I implemented. 
            Currently I only have 2D boids implemented so they can only interact with each other on 
            a flat plane. However, the system is robust enough to support 3D boids in the future.
        </p>
        <p>
            Another motion algorithm that was implemented was the PRM algorithm. There is a fox 
            located in the zoo that is bounded by a fenced in area. The fox is able to plan motion 
            around the area and avoids all the obstacles in her way. The obstacles could dynamically 
            change, and the algorithm could update itself to plan new paths. It&apos;s a nice robust system 
            and has nice application for baking in motion paths.
        </p>
        <div style={{display:"flex", justifyContent:"center"}}>
            <div>
                <StaticImage src="../../../../images/motion/prm.jpg" alt="PRM" quality={75} width={600} />
                <p>
                    The fox follows the PRM motion plan.
                </p>
            </div>
        </div>
        <p>
            The last formal algorithm that was used in the project was TTC. This stands for Time-To-Collision, 
            and it&apos;s an algorithm for moving entities to time when they will have a collision and move 
            out of the way before that happens. This was implemented in the cows, and they can be seen heading 
            towards each other and walk out of the way before any collision happens. The cows are programmed to 
            swap places with each other so if TTC was not used, they would absolutely collide.
        </p>
        <div style={{display:"flex", justifyContent:"center"}}>
            <div>
                <StaticImage src="../../../../images/motion/ttc.jpg" alt="TTC" quality={75} width={600} />
                <p>
                    Here these cows follow the TTC motion plan.
                </p>
            </div>
        </div>
        <p>
        The algorithms here definitely have limiting factors. The BOID entities are too independent and don&apos;t 
        share much processing logic. This means that simulation is only able to handle around 40 BOIDS running around. 
        A similar situation is for PRM. The PRM is generated at runtime and creates around 100 game objects into the 
        scene to be used as points. This could be baked into the scene better and prevent the use for different game 
        objects. While the implementation of these algorithms isn&apos;t too efficient, with little optimization effort, 
        much more stable results could be achieved.
        </p>
        <div style={{display:"flex", justifyContent:"center"}}>
            <div>
                <StaticImage src="../../../../images/motion/boids.jpg" alt="BOIDS" quality={75} width={600} />
                <p>
                    These dinosaur looking creatures follow the rule of BOIDS.
                </p>
            </div>
        </div>
        <h3>Early Stages</h3>
        <p>
        This project had high ambition in its early days. There was to be a much stronger game element where the player 
        would need to inspect and interact with the creatures. However, a lot of time was spent on creating the environment 
        and getting the motion algorithms implemented. Therefore, the game elements of the project had to be omitted. The 
        choice to use the Godot 4.0 engine proved to be a really good one. Areas of the project that I accepted to take a 
        lot longer actually went very fast. I had very few bugs the whole time creating the project and building the 3D 
        environment in Godot was fast and easy. It was challenging getting used to how all the game objects talk to each 
        other and sending messages. I spent a lot of my time on the Godot documentation page trying to figure out different 
        aspects of the engine.
        </p>
        <Columns maxColumns="2">
            <div>
                <StaticImage src="../../../../images/motion/sketch.png" alt="Sketch" quality={75} />
                <p>
                The first sketch of the project was a simple scene with a few animals.
                </p>
            </div>
            <div>
                <StaticImage src="../../../../images/motion/screenshot.jpg" alt="Screenshot of early progress" quality={75} />
                <p>
                A screenshot of the project when I got feedback on it for the first time.
                </p>
            </div>
        </Columns>
        <h3>Feedback</h3>
        <p>
        Showcasing my project to peers to get feedback was a good experience. From them they told me directions I should go in and gave me some new ideas. I was able to get the ideas of using TTC as feedback from someone that I showed my progress to. I also was told to flesh out my environment more which was good to hear because I wanted my environment to look nice and so did others.
        </p>
        <h3>State of the Art</h3>
        <p>
        I looked at a number of state-of-the-art motion planning techniques and specifically I looked at boids. Boids is a very old algorithm, so I was curious if there was anything recent research into the algorithm. I found really interesting work in using boids and a neural network to generate art. The boids are able to recreate art with different art styles and of different visual quality. It was very interesting work that I wanted to compare my own implementation of boids.
        </p>
        <p>
        A common motion planning technique that I did not implement was a navigation mesh. Due to not learning about them in class I didn’t have enough time to look them up on my own, but the Godot engine does use them and they are a quite powerful motion planning tool. Overall, my algorithms are much slower and clunkier than the state-of-the-art, but get the job done and still produce cool looking results.
        </p>
        <h3>Future Work</h3>
        <p>
        The future work for this project involves adding more creatures and new motion planning techniques. There is a limitless number of creatures that can be added, and it could be very fun to add more exhibits. I would really like to add more gamified elements to the simulation. Some type of checklist for all the creatures inspected and different activates to be done with the creatures. Completing these could reward the player in some way to create a win condition for the game.
        </p>
        <p>
        I also would like to see the creatures interact with the player in a more interesting way. Currently, there is only basic interaction of the player moving in front of the creatures. However, one idea is to have a dog where the player can throw a ball and the dog will catch it. Finally, I would like to add interaction between the creatures. Different types of creatures should be able to interact with each other in interesting ways.
        </p>
        <h3>Resources</h3>
        <p>
        This project uses all free and open source tools and resources. Here is how I was able to put everything together.
        <ul>
            <li>Game Engine: <a href="https://godotengine.org/">Godot 4</a></li>
            <li>Modeling: <a href="https://www.blender.org/">Blender</a></li>
            <li>Models Provided: <a href="https://quaternius.com/index.html">Quaternius.com</a></li>
            <li>Tutorials Used: <a href="https://www.youtube.com/watch?v=rcsIMlet7Fw&t=89s">Terrain</a> and <a href="https://www.youtube.com/watch?v=XjCh2cN3Mfg">Water</a></li>
        </ul>
        </p>
    </Layout>);
};

export default MotionIslandReport;
