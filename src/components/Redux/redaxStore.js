import {combineReducers, createStore} from "redux";
import messageReducer from "./messageReducer";
import profileReducer from "./profileReducer";
import sideBarReducer from "./sideBarReducer";
import UsersReducer from "./usersReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: messageReducer,
    sideBar: sideBarReducer,
    usersPage: UsersReducer
});

let store = createStore(reducers);

export default store;