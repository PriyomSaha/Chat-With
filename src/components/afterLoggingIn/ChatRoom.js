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
            }, 1000);
        }
        return () => isSubscribed = false
    });

    return (

        <div>
            <div style={header}>
                <Header />
            </div>
                <div style={messageContainer}>
                    <Messages messageDetails={messageDet.array} userName={userName} />
                </div>

            <InputMessage />
        </div>
    )
}