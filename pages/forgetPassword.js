import {Paper} from "@material-ui/core";
import {Field,reduxForm} from "redux-form";
import CustomInput from "../component/CustomInput";
import {Fragment} from 'react'
import axios from 'axios'
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import Button from "@material-ui/core/Button";
import Router from "next/router";
import Loading from "../component/Loading";
import Notification,{Error} from "../component/notification/Notification";
function ForgetPassword() {
    const selectEmail=useSelector(state=>state.form.resetPasswordWithoutLogin)
    const [timer,setTimer]=useState(null)
    const [startTimer,setStartTimer]=useState(false)
    const [notificationError,setNotificationError]=useState(null)
    const [loading,setLoading]=useState(false)
    var hours;
    var minutes;
    var second;
    if(timer!=null){
    hours=Math.floor(timer/3600)
    second=Math.floor(timer%60)
    }
    if(hours===0){
        minutes=Math.floor(timer/60)
        if (minutes<10){
            minutes="0"+minutes
        }
    }
    const createActivationCode=(e)=> {
        e.preventDefault()
        if (selectEmail.values){
            setLoading(true)
            axios.post('http://localhost:8080/password/forgetPasswordWithoutLogin', {Email: selectEmail.values.Email})
                .then(res => {
                    res.data.code ? setTimer(300) : null;
                    res.data.code ? setStartTimer(true) : null;
                    res.data.Error && setNotificationError(res.data.Error);
                    setLoading(false)
                })
                .catch(res => console.log(res + 'Error'))
                .finally(setLoading(false))
            }
    }
    const checkActiveCode=()=>{
        axios.post('http://localhost:8080/password/checkActiveCode',{Email:selectEmail.values.Email,ActiveAccountCode:selectEmail.values.ActiveAccountCode})
            .then(res=>
            {res.data.successful ?Router.push(`/changePassword?Email=${selectEmail.values.Email}`) && sessionStorage.setItem('activeCode',true)  :null ;
            res.data.Error && setNotificationError(res.data.Error)
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
            clearInterval(interval);
            axios.put('http://localhost:8080/password/deleteExpireCode',{Email:selectEmail.values.Email})
                .finally(setStartTimer(false))
        }
        return ()=>{
            clearInterval(interval)
        }
        }
    },[timer,startTimer])
    useEffect(()=>{
        {
            notificationError != null &&
            sendNotification()
            setNotificationError(null)
        }
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
                {startTimer === false && timer!==0 &&
                <button type="submit">Send Email</button>
                }
                {startTimer===false && timer===0 && <button type="submit">Resend Email</button>}
            </form>
            {startTimer===true &&
            <div>
            <Field
                name="ActiveAccountCode"
                component={CustomInput}
                placeholder={"Active Code..."}/>
                <h1>{minutes}:{second}</h1>
                <Button variant={"outlined"} color={"primary"} onClick={()=>checkActiveCode()}>Send</Button>
            </div>
            }
        </Paper>
            <Loading loading={loading} onClick={()=>setLoading(false)}/>
            <Notification/>
        </Fragment>
    )
}
export default reduxForm({
    form:'resetPasswordWithoutLogin'
})(ForgetPassword)