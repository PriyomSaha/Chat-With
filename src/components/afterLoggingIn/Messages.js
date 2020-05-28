import React, { useState, useEffect } from 'react'
import Message from './Message';

var length = 0;
function Messages({ messageDetails, userName }) {
    var moment = require('moment');

    var scrollBottom = true;
    const atBottom = () => {
        var element = document.querySelector('.ref');
        var arrowButton = document.querySelector(".arrowButton");
        window.scroll({
            top: element.scrollHeight,
            left: 0,
        });
        arrowButton.style.display = "none";
    }
    useEffect(() => {
        var element = document.querySelector('.ref');
        var arrowButton = document.querySelector(".arrowButton");
        var lastScrollTop = 0;
        window.addEventListener("scroll", function () {
            var st = window.pageYOffset || document.documentElement.scrollTop;
            if (st > lastScrollTop) {
                //down scroll
                arrowButton.style.display = "none";
            } else {
                //up scroll
                arrowButton.style.display = "block";
            }
            lastScrollTop = st <= 0 ? 0 : st;
        });
        if (scrollBottom === false) {
            window.preventDefault();
        }
        if (window.scrollY > 0) {
            scrollBottom = false;
        }
        if (scrollBottom === true) {
            window.scroll({
                top: element.scrollHeight,
                left: 0,
            });
            arrowButton.style.display = "none";
        }
        if(messageDetails.length != length)
        {     
            atBottom();
            length = messageDetails.length;    
        }
    })
    return (
        <>
            <div className="ref" >
                {messageDetails.map((message) =>
                    <div key={message.Time_Stamp} >
                        {
                            <Message
                                messageBy={message.Sender}
                                messageTime={message.Time}
                                messageDate = {message.Date}
                                message={message.Message}
                                userName={userName}
                            />
                        }
                    </div>)
                }
            </div>
            <button className="arrowButton" onClick={() => atBottom()}>B o t t o m &nbsp;<i className="arrowDown"></i></button>
        </>
    )
}

export default Messages