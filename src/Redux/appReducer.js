import {getAuthUserData} from "./authReducer";

const INITIALIZED_SUCCESS = 'netWorkApi/app/INITIALIZED_SUCCESS';

let initialState = {
    initialized: false,
    globalError: null
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state;
    }
};

//Action Creator
export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});

//Thunk
export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise]).then(() => {
        dispatch(initializedSuccess());
    })
};


export default appReducer;