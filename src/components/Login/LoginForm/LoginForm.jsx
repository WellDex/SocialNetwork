import React from "react";
import {reduxForm} from "redux-form";
import {createField, Input} from "../../common/FormsControls/FormsControls";
import {required} from "../../../utils/validators/validators";
import s from "../../common/FormsControls/FormsControls.module.css";

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField('Email', 'email', Input, [required])}
            {createField('Password', 'password', Input, [required],
                    {type: 'password'})}
            {createField(null, 'rememberMe', Input, [],
                    {type: 'checkbox'}, 'remember me')}
            {captchaUrl && <img alt={'#'} src={captchaUrl}/>}
            {captchaUrl && createField('Symbols from image', 'captcha', Input, [required])}
            {error && <div className={s.formSummaryError}>{error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
};

export const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);