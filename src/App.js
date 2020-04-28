import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Signup from './components/beforeLoggingIn/Signup'
import Login from './components/beforeLoggingIn/Login'
import Home from './components/beforeLoggingIn/Home';
import AddNewRoom from './components/afterLoggingIn/AddNewRoom';
import RoomLists from './components/afterLoggingIn/RoomLists';
import ChatRoom from './components/afterLoggingIn/ChatRoom';

function App() {
  return (
    <Router>
      <div className="App">
       
        <Route path='/' exact component={Home} />
        <Route path='/signup' component={Signup} />
        <Route path='/login' component={Login} />
        <Route path='/roomlists' component={RoomLists} />
        <Route path='/addroom' component={AddNewRoom} />
        <Route path='/chatroom' component={ChatRoom} />
      </div>
    </Router>   
  );
}

export default App;
