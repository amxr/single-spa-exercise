// Anything exported from this file is importable by other in-browser modules.
import { Subject } from 'rxjs';
import { useEffect } from 'react';

type Message = {
    sender: string,
    recipient: string,
    date: Date
}

export const eventHandler = new Subject();

export const useMessageSubscription = (recipient: string, setMessages) => {
    useEffect(() => {
        const subscription = eventHandler.subscribe(({message, messageRecipient}) => {
            if (recipient === messageRecipient) {
                setMessages((prev: string[]) => [...prev, getMessageAsText(message)]);
            }
        });

        return () => {
            subscription.unsubscribe();
        };
    }, [recipient, setMessages]);
};

export const sendMessage = (sender: string, recipient: string) => {
    const date = new Date();
    const message = {sender, recipient, date};
    eventHandler.next({message, recipient});
};

export const getMessageAsText = (message: Message): string => {
    return `Hello from ${message.sender} ${message.date}`;
};

export {default as AppView} from "./components/AppView";