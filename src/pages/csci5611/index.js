import * as React from "react";
import Button from "../../components/button";
import Layout from "../../components/layout";
import Divider from "../../components/divider";

import * as styles from "./csci5611.module.scss";
import exercise1 from "../../gifs/csci5611/Exercise_1.gif";
import exercise2 from "../../gifs/csci5611/Exercise_2.gif";
import exercise3 from "../../gifs/csci5611/Exercise_3.gif";
import exercise4 from "../../gifs/csci5611/Exercise_4.png";
import exercise5 from "../../gifs/csci5611/Exercise_5.gif";
import Columns from "../../components/columns";

const Csci5611 = () => {
  return (
    <Layout pageTitle="CSCI 5611" active="none">
      <h1 className={styles.title}>CSCI 5611 Exercise Submissions</h1>
      <p>
        These are all of my in class exercises that have been completed as apart
        of CSCI 5611: Animation and Planning in Games. Only the instructor and
        TAs have access to the GitHub repo. A link for the full repo is provided
        below, and links ot the individual exercises is linked next to the
        submitted images.
      </p>
      <Button link="https://github.umn.edu/woita016/csci5611-exercises">
        GitHub Repo
      </Button>

      <Divider />
      <h3>Exercise 1</h3>
      <Columns>
        <div>
          <p style={{ fontWeight: "bold" }}>Mouse Following</p>
          <p>No additional questions for this exercise.</p>
          <Button link="https://github.umn.edu/woita016/csci5611-exercises/tree/main/Exercise%201">
            GitHub Code Link
          </Button>
        </div>
        <div>
          <img
            src={exercise1}
            alt="This is an animated GIF of the code of exercise 1 running. The code is linked in the button bellow."
            width={640}
            className={styles.submitImage}
          />
        </div>
      </Columns>

      <Divider />
      <h3>Exercise 2</h3>
      <Columns>
        <div>
          <p style={{ fontWeight: "bold" }}>Particle System</p>
          <p>No additional questions for this exercise.</p>
          <Button link="https://github.umn.edu/woita016/csci5611-exercises/tree/main/Exercise%202">
            GitHub Code Link
          </Button>
        </div>
        <div>
          <img
            src={exercise2}
            alt="This is an animated GIF of the code of exercise 2 running. The code is linked in the button bellow."
            width={640}
            className={styles.submitImage}
          />
        </div>
      </Columns>

      <Divider />
      <h3>Exercise 3</h3>
      <Columns>
        <div>
          <p style={{ fontWeight: "bold" }}>TTC Forces</p>
          <p>No additional questions for this exercise.</p>
          <Button link="https://github.umn.edu/woita016/csci5611-exercises/tree/main/Exercise%203">
            GitHub Code Link
          </Button>
        </div>
        <div>
          <img
            src={exercise3}
            alt="This is an animated GIF of the code of exercise 3 running. The code is linked in the button bellow."
            width={640}
            className={styles.submitImage}
          />
        </div>
      </Columns>

      <Divider />
      <h3>Exercise 4</h3>
      <Columns>
        <div>
          <p style={{ fontWeight: "bold" }}>DFS/BFS</p>
          <p>
            Nodes in this exercise are represented by each index of the array
            list "neighbors". Then each edge is an array inside the index that
            the node represents. This visited list is to keep track of nodes
            already searched so that infinite loops are prevented in the search.
            We know the graph is no longer a tree because there is a circular
            loop present by nodes. This is not possible for a tree.
          </p>
          <Button link="https://github.umn.edu/woita016/csci5611-exercises/tree/main/Exercise%204">
            GitHub Code Link
          </Button>
        </div>
        <div>
          <img
            src={exercise4}
            alt="This is a screenshot of console output for exercise 4. The code is linked in the button bellow."
            width={640}
            className={styles.submitImage}
          />
        </div>
      </Columns>

      <Divider />
      <h3>Exercise 5</h3>
      <Columns>
        <div>
          <p style={{ fontWeight: "bold" }}>PRM Navigation</p>
          <p>
            You want to add a maximum length to the edges to decrease the number
            of them. Without any cap there could be way more edges than needed.
            This makes the searching algorithms a lot slower.
          </p>
          <Button link="https://github.umn.edu/woita016/csci5611-exercises/tree/main/Exercise%205">
            GitHub Code Link
          </Button>
        </div>
        <div>
          <img
            src={exercise5}
            alt="This is an animated GIF of the code of exercise 3 running. The code is linked in the button bellow."
            width={640}
            className={styles.submitImage}
          />
        </div>
      </Columns>
    </Layout>
  );
};

export default Csci5611;
