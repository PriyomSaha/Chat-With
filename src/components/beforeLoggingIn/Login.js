import React, {useState,useContext } from 'react'
import { Form, FormGroup, Label, Input, Button, Card, CardTitle, Row, Col }
    from 'reactstrap'
import { firebaseApp } from "../firebase";
import Header from './Header';
import {Redirect} from 'react-router-dom'
import { UserNameContext } from '../UserContext'
function Login() {

   const {userName,setUserName} = useContext(UserNameContext);

    const [loggedIn , setLoggedIn] = useState(false)
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    var CryptoJS = require("crypto-js");

    const check = () => {
        firebaseApp
            .firestore()
            .collection("users")
            .get().then((snapshot) => {
                const user = snapshot.docs.find(doc => (email === '' && mobile === doc.data().Mobile) || (mobile === '' && email === doc.data().E_mail));
                if (!user) {
                    // Matching user not found
                    alert("For a successful login either enter Mobile no. or enter Email id and password is mandatory");
                    return;
                }
                var bytes = CryptoJS.AES.decrypt(user.data().Password, 'secret key 123');
                var plaintext = bytes.toString(CryptoJS.enc.Utf8);
                if (password !== plaintext) {
                    alert("Wrong 1 or more credentials..");
                    return;
                }
                newPage(user);
                
            });

        setEmail('');
        setMobile('');
        setPassword('');
    }
    function newPage(user)
    {
      
        setLoggedIn(true);
        var fname = user.data().Full_name;
        setUserName(fname);
            alert("Successfully logged in as : " + fname);
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
    if( loggedIn === true)
     {
         return <Redirect to="/roomlists"/>
     }


    return (
        <div>
            <Header />
            <Form className="form col-12" >
                <Row>
                    <Card body >
                        <CardTitle><h4><b>Log In</b></h4></CardTitle>
                        <FormGroup>
                            <Row>
                                <Col><Label className="label ml-3">Mobile</Label></Col>
                            </Row>
                            <Row>
                                <Col xs="3" className="ml-3">
                                    <Input type="code" placeholder="+91" readOnly />
                                </Col>
                                <Col xs="8">
                                    <Input type="text" placeholder="Mobile" value={mobile} onChange={e => setMobile(e.target.value)} />
                                </Col>
                            </Row>
                            <Col className="separator mt-4 text-muted"> O R </Col>
                            <Col>
                                <Label className="label">Email</Label>
                                <Input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                            </Col>
                            <Col className="separator mt-4 text-muted"> A N D </Col>
                            <Col>
                                <Label className="label">Password</Label>
                                <Input type={passwordType} placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                                <span className="togglePassword" onClick={passwordToggle}><b>{passwordToggleText}</b></span>
                            </Col>
                        </FormGroup>

                        <Button color="primary" size="lg" block onClick={() => check()}>Log In</Button>
                    </Card>
                </Row>
            </Form>
        </div>
    )
}

export default Login
