import React from "react";

const MessageList = (props) => {
    return (
        <div>
            <p>Messages from {props.recipient}</p>
            <ul>
                {props.messages.map((message, index) => (
                    <li key={index}>{message}</li>
                ))}
            </ul>
        </div>
    );
};

export default MessageList;