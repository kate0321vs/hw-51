import './App.css'
import Ball from "./components/Ball/Ball.tsx";
import {useState} from "react";

interface IBall {
    num: number;
    id: number;
}

const App = () => {
    const [balls, setBall] = useState<IBall[]>([
        {num:5, id:1},
        {num:11, id:2},
        {num:16, id:3},
        {num:23, id:4},
        {num:32, id:5},
    ]);

    return (
      <div className="ballsContainer">
          {balls.map((ball) => (
              <Ball key={ball.id} num={ball.num}/>
          ))}
      </div>
  );
};

export default App

