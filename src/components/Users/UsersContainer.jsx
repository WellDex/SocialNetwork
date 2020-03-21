import React from "react";
import {connect} from "react-redux";
import {
    follow, requestUsers,
    toggleFollowingInProgress,
    unfollow
} from "../../Redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/preloader/preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUserCount, getUsers
} from "../../Redux/usersSelectors";

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        let {currentPage, pageSize} = this.props;
        this.props.getUsers(currentPage, pageSize);
    }

    onPageChanged = pageNum => {
        let {pageSize} = this.props;
        this.props.getUsers(pageNum, pageSize);
    };

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUserCount={this.props.totalUserCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}
            />;
        </>
    }
}

let mapStateToProps = state => ({
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUserCount: getTotalUserCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
});

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {follow, unfollow, toggleFollowingInProgress, getUsers: requestUsers})
)(UsersAPIComponent);