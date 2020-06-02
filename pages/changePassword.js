import {useEffect} from "react";
import axios from 'axios'
import {useRouter} from "next/router";

function ChangePassword() {
    const router=useRouter()
    useEffect(()=>{
        axios.post(`http://localhost:8080/changePassword/${router.query.Email}`)
    },[])
    return(
        <h1>Hello</h1>
    )
}
export default ChangePassword