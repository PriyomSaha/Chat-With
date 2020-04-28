import React, { useState,useEffect } from 'react'
import { Form, FormGroup, Label, Input, Button, Card, CardTitle, Row, Col }
    from 'reactstrap'
import { database } from "../firebase";
import Header from './Header';
import {Redirect} from 'react-router-dom'

export default function AddNewRoom() {

    const [roomName, setRoomName] = useState('');
    const [roomCreated, setRoomCreated] = useState(false);
    const [password, setPassword] = useState('');
    const [retypedPassword, setRetypedPassword] = useState('');
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
  
    const validatePassword = () =>{
        if( password === retypedPassword)
            addDataToDB();
        else
            alert("Password Mismatch! Re-typed password should match With the Password");
    }

    const addDataToDB = () => {   
        if(roomNames.indexOf(roomName) === -1)
        {
        var path ='';
        path = path.concat('Messages','/',roomName,'/','password');       
        var ref = database.ref(path);
        ref.push(password);
        alert("Hurrah! Room Created by the name : " + roomName);
        setPassword('');
        setRetypedPassword('');
        setRoomCreated(true);
        }
        else
            alert("Room Name '"+ roomName +"' already exists! Please Try a different Name.")
            
        setRoomName('');         
    }

    const [passwordType, setPasswordType] = useState('password');
    const [passwordToggleText, setPasswordToggleText] = useState('Show');

    const passwordToggle = () => {
        if (passwordType === "password") {
            setPasswordType('text')
            setPasswordToggleText('Hide')
        }
        else {
            setPasswordType('password')
            setPasswordToggleText('Show')
        }
    }
    if( roomCreated === true)
     {
         return <Redirect to="/roomlists"/>
     }

    return (
        <div>
            <Header />
            <Form className="form col-12" >
                <Row>
                    <Card body >
                        <CardTitle><h4><b>Create New Room</b></h4></CardTitle>
                        <FormGroup>

                            <Col>
                                <Label className="label">Room Name</Label>
                                <Input type="roomname" placeholder="Room name" value={roomName}
                                    onChange={e => setRoomName(e.target.value)} />
                            </Col>

                            <Col>
                                <Label className="label">Password</Label>
                                <Input type={passwordType} placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                                <span className="togglePassword" onClick={passwordToggle}><b>{passwordToggleText}</b></span>
                            </Col>

                            <Col>
                                <Label className="label">Re-enter Password</Label>
                                <Input type={passwordType} placeholder="Renter Password" value={retypedPassword} onChange={e => setRetypedPassword(e.target.value)} />
                                <span className="togglePassword" onClick={passwordToggle}><b>{passwordToggleText}</b></span>
                            </Col>
                        </FormGroup>

                        <Button color="primary" size="lg" block onClick={() => validatePassword()}>Create Room</Button>
                    </Card>
                </Row>
            </Form>
        </div>
    )
}
