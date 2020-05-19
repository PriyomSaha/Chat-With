import React, { useEffect } from 'react'
import Message from './Message';

function Messages({ messageDetails, userName }) {
    var scrollBottom = true;
    useEffect(() => {
        var element = document.querySelector('.ref');
       
        if (scrollBottom === false) {
            window.preventDefault();
        }
        if (window.scrollY > 0) {
            scrollBottom = false
        }
        if (scrollBottom === true) {
            window.scroll({
                top: element.scrollHeight,
                left: 0,
            });
        }

    }, [messageDetails])
    return (
        <div className="ref" >
            {messageDetails.map((message) =>
                <div key={message.Time_Stamp}>
                    {
                        <Message
                            messageBy={message.Sender}
                            messageTime={message.Time}
                            message={message.Message}
                            userName={userName}
                        />
                    }
                </div>)
            }
        </div>
    )
}

export default Messages