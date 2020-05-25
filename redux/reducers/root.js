import {combineReducers} from "redux";
import {reducer as formReducer} from 'redux-form'
import {userInformation} from './userInformation'
const root=combineReducers({
    form:formReducer,
    userInformation
})
export default root