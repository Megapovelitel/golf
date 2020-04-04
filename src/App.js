import React from 'react';
import './App.css'
import Nav from './Nav'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import About from './About'
import Comments from './Comments'
import GolfSeries from './GolfSeries'
import GolfPicture from './GolfPicture'

function App() {
  return (
    <Router>
    <Nav />
    <Switch>
     
     <Route path='/' exact component ={About} />
     <Route path='/comments' exact component={Comments} />
     <Route path='/golfseries'exact component={GolfSeries}/>
     
     <Route path={`/golfseries/:id`} exact component={GolfPicture} />
      </Switch>
   
    </Router>
  );
}

export default App;
