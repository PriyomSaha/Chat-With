import React , { useState,useEffect,useContext} from 'react'
import Header from './Header';
import { UserNameContext, RoomNameContext } from '../UserContext'
import background from './chatBackground.jpg';
import InputMessage from './InputMessage'
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
        paddingBottom:'10vh',
        width:'100%'
    }
    const header ={
        position: 'fixed',
        zIndex: 99,
        width: '100%',
        height: 'auto',
    }

    const [messageType,setmessageType] = useState('');

    return (

        <div>
            <div style= {header}>
                <Header />
            </div>

            <div>           
                    <div style={messageContainer}>
                        <div className="opponent msg">
                            <p>Hey! how are you please let me know how is it going</p>
                        </div>
                        <div className="own msg">
                            <p className="text">euiq gdbhqwdg gdbhqwdg gdbhqwdg gdbhqwdg gdbhqwdg gdbhqwdg gdbhqwdgysey</p>
                        </div>
                    </div>
            </div>

            <InputMessage/>
        </div>
    )
}
