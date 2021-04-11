import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './screens/HomeScreen';
import Game from './screens/GameScreen';
import Achievement from './screens/AchievementScreen';

class App extends Component {
  render() {
    return (      
       <BrowserRouter>
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/game" component={Game}/>
             <Route path="/achievement" component={Achievement}/>
           </Switch>
      </BrowserRouter>
    );
  }
}
 
export default App;