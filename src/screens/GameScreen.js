import React, { useState } from "react";
import Dice from "react-dice-roll";
import Board from "../components/Board";
import '../css/GameScreen.css';
import { useHistory } from "react-router-dom";

const GameScreen = () => {
  const gameData = JSON.parse(
    '{"0":{"roll":0,"player1":{"position":1,"snakeBites":0,"ladderClimb":0},"player2":{"position":1,"snakeBites":0,"ladderClimb":0}},"1":{"roll":3,"player1":{"position":4,"ladderClimb":0,"snakeBites":0},"player2":{"position":1,"snakeBites":0,"ladderClimb":0}},"2":{"roll":5,"player1":{"position":4,"ladderClimb":0,"snakeBites":0},"player2":{"position":6,"ladderClimb":0,"snakeBites":0}},"3":{"roll":6,"player1":{"position":10,"ladderClimb":0,"snakeBites":0},"player2":{"position":6,"ladderClimb":0,"snakeBites":0}},"4":{"roll":2,"player1":{"position":10,"ladderClimb":0,"snakeBites":0},"player2":{"position":8,"ladderClimb":0,"snakeBites":0}},"5":{"roll":2,"player1":{"position":12,"ladderClimb":0,"snakeBites":0},"player2":{"position":8,"ladderClimb":0,"snakeBites":0}},"6":{"roll":1,"player1":{"position":12,"ladderClimb":0,"snakeBites":0},"player2":{"position":9,"ladderClimb":0,"snakeBites":0}},"7":{"roll":2,"player1":{"position":14,"ladderClimb":0,"snakeBites":0},"player2":{"position":9,"ladderClimb":0,"snakeBites":0}},"8":{"roll":6,"player1":{"position":14,"ladderClimb":0,"snakeBites":0},"player2":{"position":15,"ladderClimb":0,"snakeBites":0}},"9":{"roll":1,"player1":{"position":15,"ladderClimb":0,"snakeBites":0},"player2":{"position":15,"ladderClimb":0,"snakeBites":0}},"10":{"roll":5,"player1":{"position":15,"ladderClimb":0,"snakeBites":0},"player2":{"position":20,"ladderClimb":0,"snakeBites":0}},"11":{"roll":3,"player1":{"position":18,"ladderClimb":0,"snakeBites":0},"player2":{"position":20,"ladderClimb":0,"snakeBites":0}},"12":{"roll":5,"player1":{"position":18,"ladderClimb":0,"snakeBites":0},"player2":{"position":11,"snakeBites":1,"ladderClimb":0}},"13":{"roll":6,"player1":{"position":24,"ladderClimb":0,"snakeBites":0},"player2":{"position":11,"snakeBites":1,"ladderClimb":0}},"14":{"roll":4,"player1":{"position":24,"ladderClimb":0,"snakeBites":0},"player2":{"position":15,"ladderClimb":0,"snakeBites":1}},"15":{"roll":6,"player1":{"position":30,"ladderClimb":0,"snakeBites":0},"player2":{"position":15,"ladderClimb":0,"snakeBites":1}},"16":{"roll":2,"player1":{"position":30,"ladderClimb":0,"snakeBites":0},"player2":{"position":17,"ladderClimb":0,"snakeBites":1}},"17":{"roll":4,"player1":{"position":34,"ladderClimb":0,"snakeBites":0},"player2":{"position":17,"ladderClimb":0,"snakeBites":1}},"18":{"roll":3,"player1":{"position":34,"ladderClimb":0,"snakeBites":0},"player2":{"position":20,"ladderClimb":0,"snakeBites":1}},"19":{"roll":1,"player1":{"position":35,"ladderClimb":0,"snakeBites":0},"player2":{"position":20,"ladderClimb":0,"snakeBites":1}},"20":{"roll":6,"player1":{"position":35,"ladderClimb":0,"snakeBites":0},"player2":{"position":21,"snakeBites":2,"ladderClimb":0}},"21":{"roll":5,"player1":{"position":40,"ladderClimb":0,"snakeBites":0},"player2":{"position":21,"snakeBites":2,"ladderClimb":0}},"22":{"roll":6,"player1":{"position":40,"ladderClimb":0,"snakeBites":0},"player2":{"position":91,"ladderClimb":1,"snakeBites":2}},"23":{"roll":5,"player1":{"position":45,"ladderClimb":0,"snakeBites":0},"player2":{"position":91,"ladderClimb":1,"snakeBites":2}},"24":{"roll":3,"player1":{"position":45,"ladderClimb":0,"snakeBites":0},"player2":{"position":94,"ladderClimb":1,"snakeBites":2}},"25":{"roll":3,"player1":{"position":48,"ladderClimb":0,"snakeBites":0},"player2":{"position":94,"ladderClimb":1,"snakeBites":2}},"26":{"roll":4,"player1":{"position":48,"ladderClimb":0,"snakeBites":0},"player2":{"position":98,"ladderClimb":1,"snakeBites":2}},"27":{"roll":1,"player1":{"position":49,"ladderClimb":0,"snakeBites":0},"player2":{"position":98,"ladderClimb":1,"snakeBites":2}},"28":{"roll":5,"player1":{"position":49,"ladderClimb":0,"snakeBites":0},"player2":{"position":99,"snakeBites":3,"ladderClimb":1}},"29":{"roll":1,"player1":{"position":50,"ladderClimb":0,"snakeBites":0},"player2":{"position":99,"snakeBites":3,"ladderClimb":1}},"30":{"roll":5,"player1":{"position":50,"ladderClimb":0,"snakeBites":0},"player2":{"position":100,"snakeBites":4,"ladderClimb":1}},"winner":"player2","gameBoard":[1,2,3,4,61,6,14,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,11,21,91,28,29,30,31,32,15,34,35,36,37,38,70,40,41,42,43,7,45,46,36,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,87,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]}');
  
  const history = useHistory();
  const [turn, setTurn] = useState(0);
  const [player1, setPlayer1] = useState(gameData[turn].player1)
  const [player2, setPlayer2] = useState(gameData[turn].player2)

  if (player1.position == 100 || player2.position == 100) 
    history.push({pathname: "/achievement", state: { gameData }});

  const [diceRoll, setDiceRoll] = useState(gameData[turn + 1].roll);

  const updateBoard = () => {
      setDiceRoll(gameData[turn + 1].roll);
      setPlayer1(gameData[turn + 1].player1);
      setPlayer2(gameData[turn + 1].player2);
      setTurn(turn + 1);
  }
  
  return (
    <div className="container">
      <h1>Snakes and Ladders</h1>
      <div className="status-bar">
        <Dice onRoll={updateBoard} size="100" cheatValue={diceRoll}/>
        <br/>
        <br/>
        {turn != 0 && <h2>Player {turn % 2 == 0 ? "2": "1"} Turn</h2>}
      </div>
      <div className="board-body">
        <Board gameBoard={gameData.gameBoard} player1={player1} player2={player2}/>
      </div>
    </div>
    );
  }
  
export default GameScreen;