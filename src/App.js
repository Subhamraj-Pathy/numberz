import React from 'react';
import './App.css';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import People from './Components/People/People'
import Planets from './Components/Planets/Planets'
import Films from './Components/Films/Films'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className='viewPort'>
              <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path='/people'>
                    <People />
                </Route>
                <Route path='/planets'>
                    <Planets />
                </Route>
                <Route path='/films'>
                    <Films />
                </Route>
              </Switch>
        </div>
    </div>
    </Router>
  );
}

export default App;
