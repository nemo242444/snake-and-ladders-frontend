import React from 'react';
import '../css/Player.css';
import { FaMale } from '@react-icons/all-files/fa/FaMale';

const Player = ({color}) => {
    return (
        <span className="player"><FaMale color={color} size="40px"/></span>
    );
}
 
export default Player;