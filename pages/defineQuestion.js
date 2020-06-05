import {Field,reduxForm} from "redux-form";
import CustomInput from "../component/CustomInput";
import Layout from "../component/Layout/Layout";
import {useSelector} from "react-redux";
import Button from "@material-ui/core/Button";
import axios from 'axios'
import {useState} from "react";
function defineQuestion(){
    const [currentOrder,setCurrentOrder]=useState()
    const question=useSelector(state=>state.form.defineQuestion)
    const sendToDB=(e)=>{
        var defineQuestion={
            question:question.values.question,
            option2:question.values.option2,
            option4:question.values.option4,
            option1:question.values.option1,
            option3:question.values.option3,
            answer:question.values.answer,
            currentOrder:currentOrder}
        e.preventDefault();
        axios.post('http://localhost:8080/question/defineQuestion',{defineQuestion}).then(res=>res.data.message ? question.values.question==="":null)
    }
    return(
        <Layout>
        <form onSubmit={(e)=>sendToDB(e)}>
            <Field
            name="question"
            component={CustomInput}
            label={"Question"}
            multiline
            style={{width:"100%",marginBottom:10}}
            />
            <Button
                variant="outlined"
                onClick={(e)=>{currentOrder===1 ?setCurrentOrder() :setCurrentOrder(1)}}
                style={{marginBottom:5}}
                color={currentOrder===1 ?"secondary" :"primary"}>
                Option 1
            </Button>
            <Field
                name="option1"
                placeholder={"option1"}
                component={CustomInput}
                multiline
                style={{width:"100%",marginBottom:10}}
            />
            <Button
                variant="outlined"
                onClick={(e)=>{currentOrder===2 ?setCurrentOrder() :setCurrentOrder(2)}}
                style={{marginBottom:5}}
                color={currentOrder===2 ?"secondary" :"primary"}>
                Option 2
            </Button>
            <Field
                name="option2"
                placeholder={"option2"}
                component={CustomInput}
                multiline
                style={{width:"100%",marginBottom:10}}
            />
            <Button
                variant="outlined"
                onClick={(e)=>{currentOrder===3 ?setCurrentOrder() :setCurrentOrder(3)}}
                style={{marginBottom:5}}
                color={currentOrder===3 ?"secondary" :"primary"}>
                Option 3
            </Button>
            <Field
                name="option3"
                placeholder={"option3"}
                component={CustomInput}
                multiline
                style={{width:"100%",marginBottom:10}}
            />
            <Button
                variant="outlined"
                onClick={(e)=>{currentOrder===4 ?setCurrentOrder() :setCurrentOrder(4)}}
                style={{marginBottom:5}}
                color={currentOrder===4 ?"secondary" :"primary"}>
                Option 4
            </Button>
            <Field
                name="option4"
                placeholder={"option4"}
                component={CustomInput}
                multiline
                style={{width:"100%",marginBottom:10}}
            />
            <Field
                name="answer"
                placeholder={"Answer"}
                component={CustomInput}
                multiline
                style={{width:"100%",marginBottom:10,marginTop:20}}
            />
            <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            >Submit Question</Button>
        </form>
        </Layout>
    )
}
export default reduxForm({
    form:"defineQuestion"
})(defineQuestion)