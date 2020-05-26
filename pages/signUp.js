import React, {Fragment, useEffect, useState} from 'react'
import {Field, reduxForm} from 'redux-form';
import {useSelector} from "react-redux";
import axios from 'axios'
import CustomInput from "../component/CustomInput";
import {Button} from "@material-ui/core";
import PasswordInput from "../component/PasswordInput";
import Notification,{Succes,Error} from "../component/notification/Notification";
const validate = values => {
    const errors = {}
    if (!values.username) {
        errors.username = 'Required'
    } else if (values.username.length > 15) {
        errors.username = 'Must be 15 characters or less'
    }
    if (!values.email) {
        errors.email = 'Required'
    }
    return errors
}

function Signup(props) {
    const signUpForm = useSelector(state => state.form.SignUp)
    const [error,setError]=useState(null)
    const sendFormToDb = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8080/signUp', signUpForm.values
        ).then(res =>{setError(res.data);console.log(res.data)}).catch(res => console.log(res))
        console.log(error)
    }
    const sendNotification=()=>{
       return  Error({message:'as'})
    }
    useEffect(()=>{
        {error === null && sendNotification()}
    },[error])
    return (
        <Fragment>
            <form onSubmit={(e) => sendFormToDb(e)} style={{margin: "10%40%"}}>
                <Field
                    component={CustomInput}
                    name="username"
                    label="Username"
                    placeholder='username...'
                />
                <Field
                    component={CustomInput}
                    type='email'
                    name="email"
                    label='Email'
                    placeholder='Email...'
                />
                <Field
                    component={PasswordInput}
                    type='text'
                    name="password"
                    label='Password'
                    placeholder='Password...'
                    labelWidth={70}
                />
                <Field
                    component={PasswordInput}
                    name="confirmPassword"
                    label='Confirm Password'
                    placeholder='ConfirmPassword...'
                    labelWidth={135}
                />
                <Field
                    component={CustomInput}
                    type='text'
                    name="phoneNumber"
                    label="PhoneNumber"
                    placeholder="PhoneNumber..."
                />
                <Button variant="contained" color="primary" type="submit" onClick={(e) => sendFormToDb(e)}>
                        Submit
                </Button>
                <Notification/>
            </form>
            {error != null && <div>{error}</div>}
            <button onClick={()=>Error({message:'ali'})}>AS</button>
        </Fragment>
    )
}

export default reduxForm({
    form: 'SignUp',
    validate,
})(Signup)