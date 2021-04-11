import React from 'react';
import GridSpace from "./GridSpace";
 
const Board = ({gameBoard, player1, player2}) => {
    return (
       <div>
          {gameBoard.reverse().map(
             (space, index) => <GridSpace 
               space={space} index={index}
               key={index}
               player1={player1} player2={player2}/>)};
       </div>
    );
}
 
export default Board;