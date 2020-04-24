import React from 'react';
import './App.css';
import Signup from './components/Signup'
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
      <Header />
        <Route path='/' exact component={Home} />
        <Route path='/signup' component={Signup} />
        <Route path='/login' component={Signup} />
      </div>
    </Router>
  );
}

export default App;
