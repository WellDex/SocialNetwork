import React from "react";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";

const maxLength100 = maxLengthCreator(100);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field placeholder={'Enter your message'} component={Textarea} name={'newMessageText'}
                   validate={[required, maxLength100]}/>
            <button>Send</button>
        </form>
    )
};

export const AddMessageFormReduxForm = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);