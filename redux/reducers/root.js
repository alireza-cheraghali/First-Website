import {combineReducers} from "redux";
import {reducer as formReducer} from 'redux-form'
import {userInformation} from './userInformation'
import {TypeOfPost} from "./TypeOfPost";
const root=combineReducers({
    form:formReducer,
    userInformation,
    TypeOfPost
})
export default root