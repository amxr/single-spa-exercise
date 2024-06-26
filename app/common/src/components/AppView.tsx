import React from 'react';
import MessageList from "./MessageList";

const AppView = (props) => {
    return (
    <section>
        {props.name} is mounted!
        <div>
            <button onClick={props.doClick}>Send message to {props.recipient}</button>
        </div>
        <MessageList messages={props.messages} recipient={props.recipient}/>
    </section>
    )
}

export default AppView;