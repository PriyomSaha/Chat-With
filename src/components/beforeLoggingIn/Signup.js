import React, { useState } from 'react'
import { Form, FormGroup, Label, Input, Button, Card, CardTitle, Row, Col }
    from 'reactstrap'
import {firebaseApp} from "../firebase";
import Header from './Header';

function Signup() {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    var CryptoJS = require("crypto-js");

    function useDetails() {
        var ciphertext = CryptoJS.AES.encrypt(password, 'secret key 123');
        firebaseApp
            .firestore()
            .collection("users")
            .add({
                Full_name: fname,
                Last_name: lname,
                E_mail: email,
                Mobile: mobile,
                Password: ciphertext.toString()
            });
        alert(fname + " your account has been created now go to log in page and try logging in");
        setFname('');
        setLname('');
        setEmail('');
        setMobile('');
        setPassword('');
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
        <div><Header />
        <Form className="form col-12" >
            <Row>
                <Card body >
                    <CardTitle><h4><b>Sign Up</b></h4></CardTitle>
                    <FormGroup>
                        <Col>
                            <Label className="label">First Name</Label>
                            <Input type="firstname" placeholder="Firstname" value={fname} onChange={e => setFname(e.target.value)} />
                        </Col>
                        <Col>
                            <Label className="label">Last Name</Label>
                            <Input type="lastname" placeholder="Lastname" value={lname} onChange={e => setLname(e.target.value)} />
                        </Col>
                        <Col>
                            <Label className="label">Email</Label>
                            <Input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                        </Col>
                        <Row>
                            <Col> <Label className="label ml-3">Mobile</Label></Col>
                        </Row>
                        <Row>
                            <Col xs="3" className="ml-3">
                                <Input type="code" placeholder="+91" readOnly />
                            </Col>
                            <Col xs="8">
                                <Input type="text" placeholder="Mobile" value={mobile} onChange={e => setMobile(e.target.value)} />
                            </Col>
                        </Row>
                        <Col>
                            <Label className="label">Password</Label>
                            <Input type={passwordType} placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                            <span className="togglePassword" onClick={passwordToggle}><b>{passwordToggleText}</b></span>
                        </Col>
                    </FormGroup>

                    <Button color="primary" size="lg" block onClick={useDetails}>Sign Up</Button>
                </Card>
            </Row>
        </Form>
        </div>
    )
}

export default Signup
