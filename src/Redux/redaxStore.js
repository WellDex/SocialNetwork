import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import messageReducer from "./messageReducer";
import profileReducer from "./profileReducer";
import sideBarReducer from "./sideBarReducer";
import UsersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReduces} from "redux-form";
import appReducer from "./appReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: messageReducer,
    sideBar: sideBarReducer,
    usersPage: UsersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReduces
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;