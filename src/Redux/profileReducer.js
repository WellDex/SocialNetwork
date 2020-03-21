import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'UPDATE-NEW-SET_USER_PROFILE-TEXT';
const SET_USER_STATUS = 'SET_USER_STATUS';
const DELETE_POST = 'DELETE_POST';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likeCount: 0},
        {id: 2, message: "It's my first post", likeCount: 23}
    ],
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likeCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        case SET_USER_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id != action.postId)
            };
        }
        default:
            return state;
    }
};

//Action Creator
export const addPost = newPostText => ({type: ADD_POST, newPostText});
export const setUserProfile = profile => ({type: SET_USER_PROFILE, profile});
export const setUserStatus = status => ({type: SET_USER_STATUS, status});
export const deletePost = postId => ({type: DELETE_POST, postId});

//Thunk
export const getUsersProfile = userId => async dispatch => {
    let data = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(data));
};
export const getUsersStatus = userId => async dispatch => {
    let data = await profileAPI.getStatus(userId);
    dispatch(setUserStatus(data));
};
export const updateUsersStatus = status => async dispatch => {
    let data = await profileAPI.updateStatus(status);
debugger;
    if (data.resultCode === 0) {
        dispatch(setUserStatus(data));
    }
};

export default profileReducer;