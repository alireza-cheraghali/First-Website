import {useEffect} from "react";
import axios from 'axios'
import Router,{useRouter} from "next/router";
import {Field,reduxForm} from 'react-redux'
function ChangePassword() {
    const router=useRouter()
    useEffect(()=>{
        {sessionStorage.getItem('activeCode') ? null:Router.push('/index')}
        axios.post(`http://localhost:8080/changePassword/${router.query.Email}`)
    },[])
    return(
        <form>
            <Field/>
            <Field/>
            <button type="submit">Submit</button>
        </form>
    )
}
export default ChangePassword