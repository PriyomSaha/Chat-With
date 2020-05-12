import ScrollToBottom from 'react-scroll-to-bottom'

import React, { useState, useEffect, useContext } from 'react'
import { UserNameContext, RoomNameContext } from '../UserContext'
import { database } from "../firebase";

import background from './chatBackground.jpg';

import Header from './Header';
import InputMessage from './InputMessage';
import Messages from './Messages';

export default function ChatRoom() {

    const { userName, setUserName } = useContext(UserNameContext);
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
    const [messageDet, setMesageDetails] = useState({ array: [] });
    var messageDetails = [];
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
                            messageDetails.push(item.val())
                        }
                    })
                });
                setMesageDetails({ array: messageDetails })
            }, 3000);
        }
        return () => isSubscribed = false
    });

    return (

        <div>
            <div style={header}>
                <Header />
            </div>

            <ScrollToBottom>
                <div style={messageContainer}>
                    <Messages messageDetails={messageDet.array} userName={userName} />
                </div>
            </ScrollToBottom>

            <InputMessage />
        </div>
    )
}

//setMesageDetails={setMesageDetails}
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