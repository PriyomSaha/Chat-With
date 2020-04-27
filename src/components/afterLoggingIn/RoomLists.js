import React, { useState, useEffect } from 'react'
import Header from './Header';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Col, Row } from 'reactstrap';
import { database } from "../firebase";
        
export default function RoomLists() {

    const [roomNames, setRoomNames] = useState([]);
    useEffect(() =>{
    var path ='';
    path = path.concat('Messages','/');       
    var ref = database.ref(path);
    ref.on('value',gotData);       
        function gotData(data){
            var items = data.val();
            var key = Object.keys(items); 
            setRoomNames(key);
        }
    },[]);
      
    return (
        <div>
            <Header/>
            <h1><b>Room Lists</b></h1>
            <ListGroup className="mt-3">
                {
                    roomNames.map(roomName => 
                    <ListGroupItem style={{textAlign:"left"}}>
                        <b>{roomName}</b>
                    </ListGroupItem>)
                }
            </ListGroup>
        </div>
    )
}
