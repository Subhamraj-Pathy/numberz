import React from 'react';
import './App.css';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import People from './Components/People/People'
import Planets from './Components/Planets/Planets'
import Films from './Components/Films/Films'
import Species from './Components/Species/Species'
import Vehicles from './Components/Vehicles/Vehicles'
import Starships from './Components/Starships/Starships'
import PeopleDetail from './Components/PeopleDetail/PeopleDetail'
import PlanetDetail from './Components/PlanetDetail/PlanetDetail'

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
                <Route path='/species'>
                    <Species />
                </Route>
                <Route path='/vehicles'>
                    <Vehicles />
                </Route>
                <Route path='/starships'>
                    <Starships />
                </Route>
                <Route path='/detail/person'>
                    <PeopleDetail />
                </Route>
                <Route path='/detail/planet'>
                    <PlanetDetail />
                </Route>
              </Switch>
        </div>
    </div>
    </Router>
  );
}

export default App;
