// Anything exported from this file is importable by other in-browser modules.
import { Subject } from 'rxjs';

type Message = {
    sender: string,
    recipient: string,
    date: Date
}

export const eventHandler = new Subject();

export const sendMessage = (sender: string, recipient: string) => {
    const date = new Date();
    const message = {sender, recipient, date};
    eventHandler.next({message, recipient});
}

export const getMessageAsText = (message: Message): string => {
    return `Hello from ${message.sender} ${message.date}`;
}

export {default as AppView} from "./components/AppView";