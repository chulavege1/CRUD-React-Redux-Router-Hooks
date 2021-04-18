import { combineReducers } from 'redux'
import { createStore, applyMiddleware } from 'redux'
import userDataReducer from './reducers/userDataReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  userdata: userDataReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))