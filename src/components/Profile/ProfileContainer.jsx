import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUsersProfile, getUsersStatus, updateUsersStatus} from "../../Redux/profileReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = this.props.myUserId;
            if (!userId) {
                this.props.history.push('/login');
            }
        }

        this.props.getUsersProfile(userId);
        this.props.getUsersStatus(userId);
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                        updateUsersStatus={this.props.updateUsersStatus}/>
    }
}

let mapStateToProps = state => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    myUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});

export default compose(
    connect(mapStateToProps, {getUsersProfile, getUsersStatus, updateUsersStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);