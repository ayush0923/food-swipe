import React from 'react'
import './App.css';
import Home from './components/pages/Home';
import Menu from './components/pages/Menu';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/menu' exact component={Menu} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
