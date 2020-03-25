import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUsersProfile, getUsersStatus, savePhoto, saveProfile, updateUsersStatus} from "../../Redux/profileReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    refreshProfile() {
        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = this.props.myUserId;
            if (!userId) {
                this.props.history.push('/login');
            }
        }

        this.props.getUsersProfile(userId);
        this.props.getUsersStatus(userId);
    };

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.match.params.userId !== this.props.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        return <Profile {...this.props}
                        profile={this.props.profile}
                        status={this.props.status}
                        updateUsersStatus={this.props.updateUsersStatus}
                        isOwner={!this.props.match.params.userId}
                        savePhoto={this.props.savePhoto}
                        saveProfile={this.props.saveProfile}/>
    }
}

let mapStateToProps = state => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    myUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});

export default compose(
    connect(mapStateToProps, {getUsersProfile, getUsersStatus, updateUsersStatus, savePhoto, saveProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);