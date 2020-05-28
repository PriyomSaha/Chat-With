import React, { useState, useContext } from 'react'
import send from './sendMessage.png';
import { Input, Container, Row, Col } from 'reactstrap';
import Image from 'react-bootstrap/Image'
import { database } from "../firebase";
import { Redirect } from 'react-router-dom'
import { UserNameContext, RoomNameContext } from '../UserContext'

export default function InputMessage(prop) {

    var moment = require('moment');
    const { userName, setUserName } = useContext(UserNameContext);
    const { roomName, setRoomName } = useContext(RoomNameContext);

    const design = {
        width: '100%',
        background: 'black',
    }

    const [message, setMessage] = useState('');
    const timeStamp = moment().format('YYYYMMD,h:mm:ssa');
    const time = moment().format('h:mm a');
    const date = moment().format('DD-MM-YY');
    const messageToDB = async () => {
        const data = {
            Message: message,
            Sender: userName,
            Time: time,
            Date : date,
            Time_Stamp: timeStamp
        }
        if (userName !== '' || roomName !== '') {
            if (message !== '') {
                var path = '';
                path = path.concat('Messages', '/', roomName);
                var ref = database.ref(path);
                ref.push(data);
            }
        }
        else {
            alert("Do not refresh the page! You need to stay Logged-In for chatting");
        }

        setMessage('');
    }

    return (
        <div style={design}>
            <Container>
                <Row>
                    <div className="msg-textbox">
                        <Col>
                            <Input className="input" type="text" placeholder="Type Message..."
                                value={message} onChange={e => setMessage(e.target.value)}
                                onKeyPress={e => e.key === 'Enter' ? messageToDB() : null} />
                        </Col>
                    </div>
                    <div>
                        <Col>
                            <Image src={send} onClick={() => messageToDB()} className="send" />
                        </Col>
                    </div>
                </Row>
                <div></div>
            </Container>
        </div>
    )
}
