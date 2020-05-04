import React, { useState, useEffect, useContext } from 'react'
import Header from './Header';
import { UserNameContext, RoomNameContext } from '../UserContext'
import background from './chatBackground.jpg';
import InputMessage from './InputMessage';
import { database } from "../firebase";
export default function ChatRoom() {

    //const { userName, setUserName } = useContext(UserNameContext);
    const { roomName, setRoomName } = useContext(RoomNameContext);
    const messageContainer = {
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'repeat-y !important',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center center',
        minHeight: '100vh',
        position: 'absolute',
        paddingTop: '100px',
        paddingBottom: '10vh',
        width: '100%'
    }
    const header = {
        position: 'fixed',
        zIndex: 99,
        width: '100%',
        height: 'auto',
    }
    //const [messageDetails, setMesageDetails] = useState([]);
    let messageDetails = [];
    var path = '';
    path = path.concat('Messages', '/', roomName);
    useEffect(() => {
        var ref = database.ref(path);
        let isSubscribed = true
        if (isSubscribed) {
            setTimeout(() => {
                ref.on('value', (snapshot) => {
                    snapshot.forEach(item => {
                        if (item.key != 'password') {
                            messageDetails.push({
                                id: item.key,
                                ...item.val()
                            })
                            //console.log(item.val());
                            //setMesageDetails(item.val());
                        }
                    })
                });
                messageDetails.map(messageDetail => console.log(messageDetail))
            }, 3000);
        }
        return () => isSubscribed = false
    });

    return (

        <div>
            <div style={header}>
                <Header />
            </div>
            <div style={messageContainer}>
                
                {/*
                <div className="opponent msg">
                    <span className="by">Deabrnab</span>
                    <p>Hey! how are you please let me know how is it going</p>
                    <span className="time">11:20 am</span>
                </div>
                <div className="own msg">
                    <span className="by">Priyom</span>
                    <p className="text">euiq gdbhqwdg gdbhqwdg gdbhqwdg gdbhqwdg gdbhqwdg gdbhqwdg gdbhqwdgysey</p>
                    <span className="time">11:20 am</span>
                </div>*/
                }



            </div>

            <InputMessage />
        </div>
    )
}















/*
var path = '';
    path = path.concat('Messages', '/', roomName);
    const details = new Set();
    //const [messageDetails, setMesageDetails] = useState([]);
    let messageDetails =[];
    const [id,setId] = useState(0);
    const trigger = () =>{
        setId(id+1)
    }
    //trigger();
    useEffect(() => {
        let unmounted = true;
        var ref = database.ref(path);
        setTimeout(() => {
            ref.on('value', gotData);
            function gotData(data) {
                var items = data.val();
                var values = Object.values(items);
                var keys = Object.keys(items);
                if (unmounted)//&& (typeof values.Meassage !== 'undefined')
                {
                    for (var i = 0; i < values.length - 1; i++)
                        details.add(keys[i]);
                    storeInArray(items);
                }
            }
        }, 3000);
        return () => {
            unmounted = true;
        }
    });
      const storeInArray = (items) => {
                        for (const key of details){
                            messageDetails.push(items[key].Message);
                        }
                        //console.clear();
                        console.log(messageDetails);
                    }
    const currentMessage = messageDetails.map((message) =>{
        return(
            <li>{message}</li>
        )
    })



    (snapshot => {
            snapshot.forEach(item => {
                if (item.key != 'password') {
                    messageDetails.push({
                        id: item.key,
                        ...item.val()
                    })
                }
                //console.log(item.val());

            })
        })
    */