import {useState, Fragment, useEffect} from "react";
import axios from 'axios'
import {useSelector,useDispatch} from "react-redux";
import {Field,reduxForm} from "redux-form";
import CustomInput from "../CustomInput";
import {Button,Typography,Card,CardContent,CardHeader} from "@material-ui/core";
import {useRouter} from 'next/router'
import Link from "next/link";
import PasswordInput from "../PasswordInput";
import Loading from "../Loading";
import Grid from "@material-ui/core/Grid";
import {Paper} from "@material-ui/core";
import Notification, {Error} from '../notification/Notification'
function Login() {
    const loginForm=useSelector(state=>state.form.login)
    const Router=useRouter();
    const [loading,setLoading]=useState(false)
    const [username,setUsername]=useState(false)
    const [password,setPassword]=useState(false)
    const [error,setError]=useState(null)
    const sendNotification=()=>{
        return  Error({message:error})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
         if (loginForm.values) {
            setLoading(true);
            setError(null)
              axios.post('http://localhost:8080/login', loginForm.values).then((res) => {
                res.data.token && Router.push('/main') && localStorage.setItem('token', res.data.token);
                  res.data.token && localStorage.setItem('username',res.data.userInformation.UserName)
                  res.data.Error && setError(res.data.Error);
            })
                  .finally(setLoading(false))
        }
        else {
            setUsername(true);
            setPassword(true)
        }
    }
    useEffect(()=>{
        {
            error != null &&
            sendNotification()
        }
    },[error])
    return(
        <Fragment>
            <Paper elevation={3} style={{width:'80%',margin:'5% auto'}}>
            <Grid container>
                <Grid item xs={4}>
                    <img src={'/static/login.png'}/>
                </Grid>
                <Grid item xs={4} style={{margin:'auto'}}>
                            <form onSubmit={(e)=>handleSubmit(e)} >
                                <Field
                                    name="username"
                                    component={CustomInput}
                                    error={username}
                                    helperText={username===true && 'Enter Your Username'}
                                    label="Username"
                                    variant="outlined"
                                    type="text"
                                    placeholder={"Username..."}/>
                                <Link href={'/forgetPassword'}>
                                    <a>Forget Password?</a>
                                </Link>
                                <br/>
                                <Field
                                    name="password"
                                    component={PasswordInput}
                                    error={password}
                                    label="Password"
                                    labelWidth={90}
                                    style={{marginTop:5}}
                                    placeholder={"Password"}
                                    type="password" />
                                <br/>
                                <Button variant="contained" color="primary" type="submit" >
                                    Login
                                </Button>
                                <br/>
                                <Typography variant={"h6"} onClick={()=>setLoading(true)}>
                                    <Link href={'/signUp'}>
                                        <a>
                                            Signup
                                        </a>
                                    </Link>
                                </Typography>
                                <Loading loading={loading} onClick={()=>setLoading(false)}/>
                            </form>
                </Grid>
            </Grid>
            <style jsx global>{`
            body{
            /*background-color:blue*/
            }
            `}
            </style>
            </Paper>
            <Notification/>
        </Fragment>

    )
}

export default reduxForm({
    form:"login"
})(Login)