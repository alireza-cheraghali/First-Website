import {Field,reduxForm} from "redux-form";
import {useSelector} from "react-redux";
import Button from '@material-ui/core/Button'
import CustomInput from "../CustomInput";
import loginChat from "../../pages/loginChat";
const validate=values=>{
    const errors={}
    if(!values.room){
        errors.room="گروه را انتخاب کنید"
    }
    return errors
}
function LoginChat() {
    const loginForm=useSelector(state=>state.form.loginChat)
    return(
        <div style={{textAlign:'center'}}>
        <Field name={"username"}  placeholder="username" component={CustomInput}  autoFocus={true}/>
        <Field name={"room"}  placeholder="room" component={CustomInput} />
            <Button variant="contained" color="secondary" href={!loginForm.syncErrors ? `/chat?username=${loginForm.values.username}&&room=${loginForm.values.room}`:null}>
                Login
            </Button>
        </div>
    )
}
export default reduxForm({
    form:'loginChat',
    validate
})(LoginChat)