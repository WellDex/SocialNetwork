import React from "react";
import {LoginReduxForm} from "./LoginForm/LoginForm";
import {connect} from "react-redux";
import {login} from "../../Redux/authReducer";
import {Redirect} from "react-router-dom";

const Login = (props) => {
    const onSubmit = formData => props.login(formData.email, formData.password, formData.rememberMe);

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
            {alert('email: free@samuraijs.com Password: free')}
        </div>
    )
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login})(Login);