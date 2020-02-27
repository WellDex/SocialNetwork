import React from "react";
import {connect} from "react-redux";
import Friends from "./Friends";

let mapStateToProps = (state) => {
    return {
        sideBar: state.sideBar
    }
};

const FriendsContainer = connect(mapStateToProps)(Friends);

export default FriendsContainer;