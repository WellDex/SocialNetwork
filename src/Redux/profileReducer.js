import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'netWorkApi/profile/ADD_POST';
const SET_USER_PROFILE = 'netWorkApi/profile/UPDATE_NEW_SET_USER_PROFILE_TEXT';
const SET_USER_STATUS = 'netWorkApi/profile/SET_USER_STATUS';
const DELETE_POST = 'netWorkApi/profile/DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'netWorkApi/profile/SAVE_PHOTO_SUCCESS';


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
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
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
export const savePhotoSuccess = photos => ({type: SAVE_PHOTO_SUCCESS, photos});

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
    try {
        let data = await profileAPI.updateStatus(status);

        if (data.resultCode === 0) {
            dispatch(setUserStatus(data));
        }
    } catch (error) {

    }
};
export const savePhoto = file => async dispatch => {
    let data = await profileAPI.savePhoto(file);

    if (data.resultCode === 0) {
        dispatch(savePhotoSuccess(data.data.photos));
    }
};
export const saveProfile = profile => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    let data = await profileAPI.saveProfile(profile);

    if (data.resultCode === 0) {
        dispatch(getUsersProfile(userId));
    } else {
        dispatch(stopSubmit('edit-profile', {_error: data.messages[0]}));
        return Promise.reject(data.messages[0]);
    }
};

export default profileReducer;