import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Signup from './components/beforeLoggingIn/Signup'
import Login from './components/beforeLoggingIn/Login'
import Home from './components/beforeLoggingIn/Home';
import AddNewRoom from './components/afterLoggingIn/AddNewRoom';
import RoomLists from './components/afterLoggingIn/RoomLists';
import ChatRoom from './components/afterLoggingIn/ChatRoom';

import { UserNameContext, RoomNameContext } from './components/UserContext';

function App() {
  const [userName, setUserName] = useState('');
  const [roomName, setRoomName] = useState('');
  return (
    <UserNameContext.Provider value={{ userName, setUserName }}>
      <RoomNameContext.Provider value={{ roomName, setRoomName }}>
        <Router>
          <div className="App">

            <Route path='/' exact component={Home} />
            <Route path='/signup' component={Signup} />
            <Route path='/login' component={Login} />
            <Route path='/roomlists' component={RoomLists} />
            <Route path='/addroom' component={AddNewRoom} />
            <Route path='/chatroom:room_id' component={ChatRoom} />

          </div>
        </Router>
      </RoomNameContext.Provider>
    </UserNameContext.Provider>
  );
}

export default App;
