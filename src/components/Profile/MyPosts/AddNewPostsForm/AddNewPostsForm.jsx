import React from 'react';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../utils/validators/validators";
import {Textarea} from "../../../common/FormsControls/FormsControls";

const maxLength30 = maxLengthCreator(30);

const AddNewPostsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Enter your post'} name={'newPostText'} component={Textarea}
                       validate={[required, maxLength30]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
};

export const AddNewPostsFormReduxForm = reduxForm({form: 'ProfileAddNewPostsForm'})(AddNewPostsForm);