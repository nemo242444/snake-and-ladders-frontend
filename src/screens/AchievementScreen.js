import React from 'react';
import '../css/HomeScreen.css';
import { useLocation } from "react-router-dom";

const AchievementScreen = () => {
    const location = useLocation();

    console.log(location.state)
    return (
      <div class="container">
         Congratulations: {location.state.gameData.winner}
         <br/>
         You are the winner. Ya filthy animal :P
      </div>
    );
}
 
export default AchievementScreen;