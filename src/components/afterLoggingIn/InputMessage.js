    import React , { useState,useEffect,useContext} from 'react'
    import send from './sendMessage.png';
    import { Input, Container, Row, Col} from 'reactstrap';
    import Image from 'react-bootstrap/Image'
    import { database } from "../firebase";
    import { UserNameContext, RoomNameContext } from '../UserContext'

    export default function InputMessage(prop) {

        var moment = require('moment');
        const { userName, setUserName } = useContext(UserNameContext);
        const { roomName, setRoomName } = useContext(RoomNameContext);

        const design = {
            width: '100%',
            background: 'black',
        }

        const [addToMessageList, setAddToMessageList] = useState(true)
        const [message,setMessage] = useState('');
        const timeStamp=moment().format('YYYYMMD,h:mm:ssa');
        const time = moment().format('h:mm a');
        const messageToDB = () => {
        const data ={
            Message : message,
            Sender : userName,
            Time : time,
            Time_Stamp : timeStamp
        }
        var path ='';
        path = path.concat('Messages','/',roomName);
        var ref = database.ref(path);
        ref.push(data);
        
        prop.setMesageDetails([...prop.messageDetails,data])

        setMessage('');
        setAddToMessageList(true);
    }
    useEffect(() => {
        //prop.messageDetails.map(messageDetail => console.log(messageDetail))
        //console.log(prop.messageDetails);
        
        setAddToMessageList(false);
    },[addToMessageList])
        return (
            <div style={design}>
                <Container>
                    <Row>
                        <div className="msg-textbox">
                            <Col>
                                <Input className="input" type="text" placeholder="Type Message..."
                                value={message} onChange={e => setMessage(e.target.value)} 
                                onKeyPress= {e => e.key === 'Enter' ? messageToDB() : null}/>
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
