import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {AddMessageFormReduxForm} from "./AddMessageForm/AddMessageForm";

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogElements = state.dialogs.map(el => <DialogItem id={el.id} name={el.name} img={el.img}/>);
    let messageElement = state.messages.map(el => <Message id={el.id} message={el.message}/>);

    let addNewMessage = (value) => {
        props.sendMessage(value.newMessageText);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialog_items}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                <div>{messageElement}</div>
                <AddMessageFormReduxForm onSubmit={addNewMessage}/>
            </div>
        </div>
    );
};

export default Dialogs;