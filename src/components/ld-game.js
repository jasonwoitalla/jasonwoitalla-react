import * as React from "react";

const LdGame = ({ gameId = 40 }) => {
  if (gameId === 40) {
    return (
      <iframe
        src="../../ludum-dare-40/index.html"
        title="Cave Rescue"
        width="640"
        height="480"
      />
    );
  } else if (gameId === 38) {
    return (
      <iframe
        src="../../ludum-dare-38/index.html"
        title="Lava Moon"
        width="640"
        height="480"
      />
    );
  } else if (gameId === 37) {
    return (
      <iframe
        src="../../ludum-dare-37/index.html"
        title="Dungeon Train"
        width="640"
        height="480"
      />
    );
  } else if (gameId === 35) {
    return (
      <iframe
        src="../../ludum-dare-35/index.html"
        title="Shape Shooters"
        width="640"
        height="480"
      />
    );
  } else if (gameId === 34) {
    return (
      <iframe
        src="../../ludum-dare-34/index.html"
        title="Fortress Hunt"
        width="640"
        height="480"
      />
    );
  }
};

export default LdGame;
