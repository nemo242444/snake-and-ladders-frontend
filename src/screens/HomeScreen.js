import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import '../css/HomeScreen.css';

const HomeScreen = () => {
   
    return (
      <div class="container">
         <h1>Welcome to Snakes and Ladders Game Generator</h1>
         <br/>
         <NavLink to="/Game">
            <Button variant="dark">
               Start game
            </Button>
         </NavLink>
      </div>
    );
}
 
export default HomeScreen;