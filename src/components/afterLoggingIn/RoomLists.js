import React, { useState, useEffect } from 'react'
import { ListGroup, ListGroupItem} from 'reactstrap';
import { database } from "../firebase";

import Header from './Header';
import {Redirect} from 'react-router-dom'

export default function RoomLists() {

    const [roomNames, setRoomNames] = useState([]);
    useEffect(() => {
        var path = '';
        path = path.concat('Messages', '/');
        var ref = database.ref(path);
        ref.on('value', gotData);
        function gotData(data) {
            var items = data.val();
            var key = Object.keys(items);
            setRoomNames(key);
        }
    }, []);

    const [chatRoom, setChatRoom] = useState(false);
    const acceptPassword = (name) => {

        var pass = prompt("Please enter the password for the room : ' " + name + " '");
        if (pass == null || pass == "") {
            alert("You need to enter the password to enter the room");
        } else {
            validatePassword(name,pass)
            }
        };

        const validatePassword = (roomName,password) => {
            
            var path = '';
            path = path.concat('Messages', '/', roomName, '/', 'password');
            var ref = database.ref(path);
            ref.on('value', gotData);
            function gotData(data) {
                var items = data.val();
                var DBpassword = Object.values(items);
                if (DBpassword == password)
                {
                    alert("You have Successfully entered the Room");
                    setChatRoom(true);
                }
                else
                {
                    alert("Enter the correct Password");
                }
            }
        };

        if(chatRoom === true)
            return <Redirect to="/chatroom"/>

        return (
            <div>
                <Header />
                <h1><b>Room Lists</b></h1>
                <ListGroup className="mt-3">
                    {
                        roomNames.map(roomName =>
                            <ListGroupItem style={{ textAlign: "left" }} onClick={() => acceptPassword(roomName)}>
                                <b>{roomName}</b>
                            </ListGroupItem>)
                    }
                </ListGroup>
            </div>
        )
    }
