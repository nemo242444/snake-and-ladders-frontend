import React from 'react';
import Animal from "react-animals";
import Player from "../components/Player";
import { GiElevator } from "@react-icons/all-files/gi/GiElevator";

import '../css/GridSpace.css';

const GridSpace = ({space, index, player1, player2}) => {

   return (
       <div className="space">
         <i className="fa fa-circle">
            <span style={{ position: "absolute" }}>{index+1}</span>
         </i>

         {space - 1 < index && <Animal size="70px" name="python" color="green" dance />}
         {space - 1 > index && <GiElevator size={70} />}
         {player1.position == index + 1 && <Player color="blue" />}
         {player2.position == index + 1 && <Player color="red" />}
       </div>
    );
}
 
export default GridSpace;