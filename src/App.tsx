import "./App.css";
import Ball from "./components/Ball/Ball.tsx";
import { useState } from "react";

interface IBall {
  num: number;
  id: number;
}

const App = () => {
  const [balls, setBall] = useState<IBall[]>([
    { num: 5, id: 1 },
    { num: 11, id: 2 },
    { num: 16, id: 3 },
    { num: 23, id: 4 },
    { num: 32, id: 5 },
  ]);

  const getNewNumbers = () => {
    const copyBalls = [...balls];

    for (let i = 0; i <= 4; i++) {
      const copyBall = { ...copyBalls[i] };
      let randomNumber = Math.floor(Math.random() * (32 - 5) + 5);

      while (true) {
        if (copyBalls.map((ball) => ball.num).includes(randomNumber)) {
          randomNumber = Math.floor(Math.random() * (32 - 5) + 6);
        } else {
          copyBall.num = randomNumber;
          break;
        }
      }
      copyBalls[i] = copyBall;
    }
    copyBalls.sort((a, b) => a.num - b.num);
    setBall(copyBalls);
  };

  return (
    <>
      <div className="ballsContainer">
        {balls.map((ball) => (
          <Ball key={ball.id} num={ball.num} />
        ))}
      </div>
      <button className="ballsBtn" onClick={getNewNumbers}>
        New Numbers
      </button>
    </>
  );
};

export default App;
