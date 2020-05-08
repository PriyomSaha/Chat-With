import React from 'react'

function Message(props) {
    let isSentByCurrentUser = false;

    if (props.userName === props.messageBy) {
        isSentByCurrentUser = true;
    }
    return (


        isSentByCurrentUser
            ? (
                <div className="own msg">
                    <span className="by">{props.messageBy}</span>
                    <p className="text">{props.message}</p>
                    <span className="time">{props.messageTime}</span>
                </div>
            )
            : (
                <div className="opponent msg">
                    <span className="by">{props.messageBy}</span>
                    <p className="text">{props.message}</p>
                    <span className="time">{props.messageTime}</span>
                </div>
            )
    )
}

export default Message
