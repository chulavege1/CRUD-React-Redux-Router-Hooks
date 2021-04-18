const SET_USER_FETCHING = 'SET_USER_FETCHING'
const SET_MESSAGE_FOR_ADMIN = "SET_MESSAGE_FOR_ADMIN"
const CREATE_USER = "CREATE_USER"
const SET_USER_DATA = 'SET_USER_DATA'
const UPDATE_USER = "UPDATE_USER"
const DELETE_USER = "DELETE_USER"

const defaultState = {
    users: [],
    isFetching: true,
    message: 'Wait for action'
}

const userDataReducer = (state = defaultState, action) => {
    const { users } = state
    const { payload } = action
          
    switch(action.type){
        case SET_USER_DATA:
            return {
                ...state,
                users: payload,
                isFetching: false
            }
        case SET_USER_FETCHING:
            return {
                ...state,
                isFetching: payload
            }
        case SET_MESSAGE_FOR_ADMIN:
            return {
                ...state, 
                message: payload
        }
        case CREATE_USER:
            return {
                ...state, 
                payload
        }
        case UPDATE_USER:
            return users.map((user) => {
                if (user.id === payload.id) {
                return {
                    ...user,
                    ...payload,
                };
                } else {
                return user
                }
            });
        case DELETE_USER:
            return users.filter(({ id }) => id !== payload.id)
        default:
            return state
    }
}

export const setUserData = (userdata) => ({ type: SET_USER_DATA, payload: userdata })
export const setIsFetching = (bool) => ({ type: SET_USER_FETCHING, payload: bool })
export const setMessageForAdmin = (message) => ({ type: SET_MESSAGE_FOR_ADMIN, payload: message})

export default userDataReducer