import React , { useState,useContext} from 'react'
import send from './sendMessage.png';
import { Input, Container, Row, Col} from 'reactstrap';
import Image from 'react-bootstrap/Image'
import { database } from "../firebase";
import { UserNameContext, RoomNameContext } from '../UserContext'
export default function InputMessage() {

    var moment = require('moment');
    const { userName, setUserName } = useContext(UserNameContext);
    const { roomName, setRoomName } = useContext(RoomNameContext);

    const design = {
        width: '100%',
        background: 'black',
    }

    const [message,setMessage] = useState('');
    const time= moment().format('YYYYMMDDhmmss');
const messageToDB = () => {
    const data ={
        Sender : userName,
        Message : message,
        Time : time
    }
    var path ='';
        path = path.concat('Messages','/',roomName);
        var ref = database.ref(path);
        ref.push(data);
        
        setMessage('');
}
    return (
        <div style={design}>
            <Container>
                <Row>
                    <div className="msg-textbox">
                        <Col>
                            <Input className="input" type="text" placeholder="Type Message..."
                            value={message} onChange={e => setMessage(e.target.value)} />
                        </Col>
                    </div>
                    <div>
                        <Col>
                            <Image src={send} onClick={() => messageToDB()} className="send"/>
                        </Col>
                    </div>
                </Row>
                <div></div>
            </Container>
        </div>
    )
}
