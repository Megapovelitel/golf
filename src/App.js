import React from 'react';
import './App.css'
import Nav from './Nav'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import About from './About'
import Comments from './Comments/Comments'
import GolfSeries from './GolfSeries/GolfSeries'
import GolfPicture from './GolfSeries/GolfPicture'
import Video from './Video'
function App() {
  return (
    <Router>
    <Nav />
    <Switch>
     
     <Route path='/' exact component ={About} />
     <Route path='/comments' exact component={Comments} />
     <Route path='/golfseries'exact component={GolfSeries}/>
     <Route path='/video' exact component={Video} />
     <Route path={`/golfseries/:id`} exact component={GolfPicture} />
      </Switch>
   
    </Router>
  );
}

export default App;
