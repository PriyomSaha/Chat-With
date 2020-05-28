import React, { useState,useEffect } from 'react'

function Message(props) {
    var moment = require('moment');

    let isSentByCurrentUser = false;
    var dbdate = props.messageDate;
    var yesterday = moment().subtract(1, 'day').format('DD-MM-YY');
    var today = moment().subtract(0, 'day').format('DD-MM-YY');
    const [date, setDate] = useState('');

    useEffect(() => {
        const datecheck = () => {
            if (dbdate == yesterday) {
                setDate('Yesterday');
            }
            else if (dbdate == today) {
                setDate('Today');
            }
            else{
                setDate(dbdate);
            }
            //console.log(date);
        }
    
        datecheck();
    })
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
                    <span className="date">{date}</span>
                </div>
            )
            : (
                <div className="opponent msg">
                    <span className="by">{props.messageBy}</span>
                    <p className="text">{props.message}</p>
                    <span className="time">{props.messageTime}</span>
                    <span className="date">{date}</span>
                </div>
            )
    )
}

export default Message
