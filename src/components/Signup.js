import React, { useState } from 'react'
import { Form, FormGroup, Label, Input, Button, Card, CardTitle, Row, Col }
    from 'reactstrap'
import firebase from "../firebase";

function Signup() {
    const [name, setName] = useState('');
    const [uname, setUname] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    function useDetails() {
        firebase
            .firestore()
            .collection("users")
            .add({
                Full_name: name,
                User_name: uname,
                E_mail: email,
                Mobile: mobile,
                Password: password
            });
        setName('');
        setUname('');
        setEmail('');
        setMobile('');
        setPassword('');
    }
    const [passwordType , setPasswordType] = useState('password');
    const [passwordToggleText , setPasswordToggleText] = useState('Show');
    const passwordToggle = () =>{
        if(passwordType == "password")
        {
            setPasswordType('text')
            setPasswordToggleText('Hide')
        }
        else
        {
            setPasswordType('password')
            setPasswordToggleText('Show')
        }
    }
    return (
        <Form className="form col-12" >
            <Row>
                <Card body >
                    <CardTitle><b>Sign Up</b></CardTitle>
                    <FormGroup>
                        <Col>
                            <Label className="label">Full Name</Label>
                            <Input type="fullname" placeholder="Fullname" value={name} onChange={e => setName(e.target.value)} />
                        </Col>
                        <Col>
                            <Label className="label">User Name</Label>
                            <Input type="username" placeholder="Username" value={uname} onChange={e => setUname(e.target.value)} />
                        </Col>
                        <Col>
                            <Label className="label">Email</Label>
                            <Input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                        </Col>
                        <Row>
                            <Col> <Label className="label">Mobile</Label></Col>
                        </Row>
                        <Row>
                            <Col xs="3">
                                <Input type="code" placeholder="+91" readOnly />
                            </Col>
                            <Col xs="9">
                                <Input type="text" placeholder="Mobile" value={mobile} onChange={e => setMobile(e.target.value)} />
                            </Col>
                        </Row>
                        <Col>
                            <Label className="label">Password</Label>
                            <Input type={passwordType} placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                            <span className="togglePassword" onClick={passwordToggle}>{passwordToggleText}</span>
                        </Col>
                    </FormGroup>

                    <Button color="primary" size="lg" block onClick={useDetails}>Sign Up</Button>
                </Card>
            </Row>
        </Form>
    )
}

export default Signup
