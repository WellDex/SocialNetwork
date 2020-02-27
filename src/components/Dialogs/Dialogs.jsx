import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogElements = state.dialogs.map(el => <DialogItem id={el.id} name={el.name} img={el.img}/>);
    let messageElement = state.messages.map(el => <Message id={el.id} message={el.message}/>);
    let newMessageText = state.newMessageText;

    let sendMessage = () => props.sendMessage();
    let onMessageChange = (e) => props.updateNewMessageText (e.target.value);

    return (
        <div className={s.dialogs}>
            <div className={s.dialog_items}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                <div>{messageElement}</div>
                <div>
                    <textarea placeholder='Enter your message' onChange={onMessageChange}
                              value={newMessageText}></textarea>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;