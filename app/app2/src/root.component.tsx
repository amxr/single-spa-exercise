import React, {useEffect, useState} from "react";
// @ts-ignore
import { sendMessage, getMessageAsText, eventHandler, AppView} from "@verint/common";

export default function Root(props) {
  const appName = "app 2";
  const recipient = "app 1";
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    const subscription = eventHandler.subscribe(({message, recipient}) => {
      if (recipient === appName){
        setMessages((prev) => [...prev, getMessageAsText(message)]);
      }
    });

    return () => {
      subscription.unsubscribe();
    }
  }, []);

  const doSend = () => {
    sendMessage(appName, recipient);
  }
  return <AppView
      doClick={doSend}
      messages={messages}
      recipient={recipient}
      name={props.name}
  />;
}
