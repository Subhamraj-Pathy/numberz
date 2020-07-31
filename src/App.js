import React from 'react';
import './App.css';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import People from './Components/People/People'

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
              </Switch>
        </div>
    </div>
    </Router>
  );
}

export default App;
