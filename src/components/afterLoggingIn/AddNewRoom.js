import React, { useState } from 'react'
import { Form, FormGroup, Label, Input, Button, Card, CardTitle, Row, Col }
    from 'reactstrap'
import { database } from "../firebase";
import Header from './Header';

export default function AddNewRoom() {

    const [roomName, setRoomName] = useState('');
    const [password, setPassword] = useState('');
    const [retypedPassword, setRetypedPassword] = useState('');
    
    const validatePassword = () =>{
        if( password === retypedPassword)
            addDataToDB();
        else
            alert("Password Mismatch! Re-typed password should match With the Password");
    }

    const addDataToDB = () => {     
        var path ='';
        path = path.concat('Messages','/',roomName,'/','password');       
        var ref = database.ref(path);
        ref.push(password);

        setRoomName('');
        setPassword('');
        setRetypedPassword('');
           
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
