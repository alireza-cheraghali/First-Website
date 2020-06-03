import {Paper} from "@material-ui/core";
import {Field,reduxForm} from "redux-form";
import CustomInput from "../component/CustomInput";
import {Fragment} from 'react'
import axios from 'axios'
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import Button from "@material-ui/core/Button";
import Router from "next/router";
import Notification,{Error} from "../component/notification/Notification";
function ForgetPassword() {
    const selectEmail=useSelector(state=>state.form.resetPasswordWithoutLogin)
    const [timer,setTimer]=useState(300)
    const [startTimer,setStartTimer]=useState(false)
    const [notificationError,setNotificationError]=useState(null)
    const createActivationCode=(e)=>{
        e.preventDefault()
        {selectEmail.values
            ?
            axios.post('http://localhost:8080/password/forgetPasswordWithoutLogin',{Email:selectEmail.values.Email})
                .then(res=>{res.data.code ?setStartTimer(true):null;res.data.Error ? setNotificationError(res.data.Error) && sendNotification() : null;console.log(res.data)})
                .catch(res=>console.log(res+'Error'))
            :
            null}
    }
    const checkActiveCode=()=>{
        axios.post('http://localhost:8080/password/checkActiveCode',{Email:selectEmail.values.Email,ActiveAccountCode:selectEmail.values.ActiveAccountCode})
            .then(res=>
            {res.data.successful ?Router.push(`/changePassword?Email=${selectEmail.values.Email}`) && sessionStorage.setItem('activeCode',true)  :null ;
            res.data.Error ? setNotificationError(res.data.Error): null;console.log(res.data)
            })
    }
    const sendNotification=()=>{
       return   Error({message:notificationError})
    }
    useEffect(()=>{
        var interval=null;
        if(startTimer){
        interval=setInterval(()=>setTimer(prevState=>prevState-1),1000)
        if (timer<=0){
            clearInterval(interval)
            axios.put('http://localhost:8080/password/deleteExpireCode',{Email:selectEmail.values.Email})
                .then(res=>console.log(res))
        }
        return ()=>{
            clearInterval(interval)
        }
        }
    },[timer,startTimer])
    useEffect(()=>{
        {notificationError!=null && sendNotification()}
    },[notificationError])
    return(
        <Fragment>
        <Paper style={{
            margin:'20% auto',
            height:'100%',
            width:'50%',
            maxWidth:'100%',
            maxHeight:'100%'
        }} elevation={3} variant={"outlined"} square>
            <form onSubmit={(e)=>createActivationCode(e)}>
            <Field
                name="Email"
                component={CustomInput}
                type="Email"
                size="medium"
                label="Email"
                placeholder="Email"
            />
                {startTimer === false &&
                <button type="submit">Send Email</button>
                }
            </form>
            {startTimer===true &&
            <div>
            <Field
                name="ActiveAccountCode"
                component={CustomInput}
                placeholder={"Active Code..."}/>
                {timer} Seconds
                <Button variant={"outlined"} color={"primary"} onClick={()=>checkActiveCode()}>Send</Button>
            </div>

            }
        </Paper>
            <Notification/>
        </Fragment>
    )
}
export default reduxForm({
    form:'resetPasswordWithoutLogin'
})(ForgetPassword)