import React from "react";
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../../common/FormsControls/FormsControls";
import {required} from "../../../utils/validators/validators";
import s from "../../common/FormsControls/FormsControls.module.css";

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField('Email', 'email', Input, [required])}
            {
                createField('Password', 'password', Input, [required],
                    {type: 'password'})}
            {
                createField(null, 'rememberMe', Input, [],
                    {type: 'checkbox'}, 'remember me')}
            {
                error && <div className={s.formSummaryError}>
                    {error}
                </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
};

export const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);