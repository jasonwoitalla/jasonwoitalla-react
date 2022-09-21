import * as React from "react";
import Layout from "../../../components/layout";
import LdGame from "../../../components/ld-game";

import * as styles from "./ludum-dare-37.module.scss";

const LudumDare37 = () => {
  return (
    <Layout pageTitle="Ludum Dare 37">
      <h1 className={styles.header}>Ludum Dare 40: Cave Rescue</h1>
      <div className={styles.gameContainer}>
        <LdGame gameId={37} />
      </div>
      <p>
        Blob Story: Cave Rescue! Is an adventure game where you have to traverse
        a randomly generated cave in order to rescue all the blobs! You will go
        from room to room searching for them, and collecting their energy to
        give you a boost. However have too much energy and it will become tough
        to see, enemies will find you easier and more :O Do your best to rescue
        as many blobs as you can and return them to safety!
      </p>
      <p style={{ fontWeight: "bold" }}>Controls:</p>
      <p>
        Move: W, A, S, D<br />
        Aim: Mouse Pointer
        <br />
        Shoot: Mouse Click
      </p>
      <p style={{ fontWeight: "bold" }}>Game Tips:</p>
      <p>
        Here are a few tips to help out since I didn't have a whole lot of time
        for a tutorial.
        <ol>
          <li>
            If you have too much energy that you want to get ride of go back to
            the starting room to empty out!
          </li>
          <li>
            The crude graphics in the bottom left corner is a mini-map, it will
            generate as the cave randomly gets created.
          </li>
          <li>
            Each section of the map has a blob located in it, keep an eye out
            for them!
          </li>
        </ol>
      </p>
      <p style={{ fontWeight: "bold" }}>Programs Used:</p>
      <ul>
        <li>Sublime Text (code editor)</li>
        <li>Paint.net(image editor)</li>
        <li>Photoshop(image editor)</li>
        <li>FL Studio(music editor)</li>
      </ul>
    </Layout>
  );
};

export default LudumDare37;
