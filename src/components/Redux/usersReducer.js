const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

let initialState = {
    users: [],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 1
};

const UsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(users => {
                    if (users.id === action.userId) {
                        return {...users, followed: true}
                    }
                    return users;
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(users => {
                    if (users.id === action.userId) {
                        return {...users, followed: false}
                    }
                    return users;
                })
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: action.users
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.pageNum
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUserCount: action.totalUsersCount
            }
        }
        default:
            return state;
    }
};

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});
export const setCurrentPageAC = (pageNum) => ({type: SET_CURRENT_PAGE, pageNum});
export const setTotalUsersCounts = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});

export default UsersReducer;