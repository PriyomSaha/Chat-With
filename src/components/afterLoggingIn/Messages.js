import React, { useEffect } from 'react'
import Message from './Message';

function Messages(props) {
    useEffect(() => {
        var element = document.querySelector('.ref');
        console.log(window.scrollY);
        window.scroll({
            top: element.scrollHeight,
            left: 0,
          });      
    })   
//element.scrollHeight-window.scrollY <=20
    return (
        <div className="ref" >
            {props.messageDetails.map((message) =>
                <div key={message.Time_Stamp}>
                    {
                        <Message
                            messageBy={message.Sender}
                            messageTime={message.Time}
                            message={message.Message}
                            userName={props.userName}
                        />
                    }
                </div>)
            }
        </div>
    )
}

export default Messages

/*
<div className="opponent msg">
<span className="by">Deabrnab</span>
<p>Hey! how are you please let me know how is it going</p>
<span className="time">11:20 am</span>
</div>
<div className="own msg">
<span className="by">Priyom</span>
<p className="text">euiq gdbhqwdg gdbhqwdg gdbhqwdg gdbhqwdg gdbhqwdg gdbhqwdg gdbhqwdgysey</p>
<span className="time">11:20 am</span>
</div>
*/