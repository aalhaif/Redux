import counterReducer from './counter'
import logReducer from './isLogged'
import contactList from './contactList'
import {combineReducers} from 'redux'
const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: logReducer,
    contactList,
})
export default allReducers