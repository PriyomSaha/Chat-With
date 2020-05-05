import React, { useState, useEffect, useContext } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap';
import { database } from "../firebase";

import Header from './Header';
import { Redirect } from 'react-router-dom'

import { RoomNameContext } from '../UserContext'

export default function RoomLists() {

    const { roomName, setRoomName } = useContext(RoomNameContext);
    const [id, setId] = useState(''); //dynamic id of the room
    const [roomNames, setRoomNames] = useState([]);
    useEffect(() => {
        let isSubscribed = true
        if (isSubscribed) {
            var path = '';
            path = path.concat('Messages', '/');
            var ref = database.ref(path);
            ref.on('value', gotData);
            function gotData(data) {
                var items = data.val();
                var key = Object.keys(items);
                setRoomNames(key);
            }
        }
        return () => isSubscribed = false
    }, []);


    const [chatRoom, setChatRoom] = useState(false);
    const acceptPassword = (name) => {
        var pass = prompt("Please enter the password for the room : ' " + name + " '");
        if (pass == null || pass == "") {
            alert("You need to enter the password to enter the room");
        } else {
            validatePassword(name, pass)
        }
    };

    const validatePassword = (roomName, password) => {

        var path = '';
        path = path.concat('Messages', '/', roomName, '/', 'password');
        var ref = database.ref(path);
        ref.on('value', gotData);
        function gotData(data) {
            var items = data.val();
            var DBpassword = Object.values(items);
            setId(Object.keys(items));
            if (DBpassword == password) {
                alert("You have Successfully entered the Room");
                setChatRoom(true);
                setRoomName(roomName);
            }
            else {
                alert("Enter the correct Password");
            }
        }
    };

    if (chatRoom === true)
        return <Redirect to={"/chatroom" + id} />

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
