import Layout from "../component/Layout/Layout";
import {useEffect, useState,Fragment} from "react";
import axios from 'axios'
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
function answerQuestion() {
    const [questionList,setQuestionList]=useState([])
    const [answerSheet,setAnswerSheet]=useState([])
    const Answer=(i,a)=> {
        var checkID=answerSheet.filter(id=>id.Question_ID===questionList[i].Question_ID)
        if(checkID.length===0){
            answerSheet.push({Question_ID: questionList[i].Question_ID, answer: a})
        }else{
            answerSheet.filter(id=>id.Question_ID===questionList[i].Question_ID ? id.answer=a : null)
        }
    }
    useEffect(()=>{
        axios.get("http://localhost:8080/question/getQuestion").then(res=>{setQuestionList(res.data);console.log(res)})
    },[])
    return(
        <Layout>
            {questionList.length>=1 ?
                <ol style={{direction:"rtl"}}>
                    {questionList.map((val,index) =>
                        <li key={index}>
                            <Typography variant={"h5"}>{val.Question}</Typography>
                            <div style={{display:"inline-flex"}}>
                            <Button
                                variant={"contained"}
                                color={answerSheet.filter(val=>val.Question_ID===questionList[i].Question_ID && val.answer===1) ? "primary" : "secondary"}
                                size={"small"}
                                onClick={(i,a)=>Answer(index,1)}>
                                1
                            </Button>
                                <Typography variant={"h6"} style={{marginLeft:"40%",marginRight:'2%'}}>{val.Option1}</Typography>
                                <Button
                                    variant={"contained"}
                                    color={"primary"}
                                    size={"small"}
                                    onClick={(i,a)=>Answer(index,2)}>
                                    2
                                </Button>
                                <Typography variant={"h6"} style={{marginLeft:"40%",marginRight:'2%'}}>{val.Option2}</Typography>
                                <Button
                                    variant={"contained"}
                                    color={"primary"}
                                    size={"small"}
                                    onClick={(i,a)=>Answer(index,3)}>
                                    3
                                </Button>
                                <Typography variant={"h6"} style={{marginLeft:"40%",marginRight:'2%'}}>{val.Option3}</Typography>
                                <Button
                                    variant={"contained"}
                                    color={"primary"}
                                    size={"small"}
                                    onClick={(i,a)=>Answer(index,4)}>
                                    4
                                </Button>
                                <Typography variant={"h6"} style={{marginLeft:"40%",marginRight:'2%'}}>{val.Option4}</Typography>
                            </div>
                        </li>
                    )}
                </ol>
                :
                <div>No Question</div>
            }
        </Layout>
    )
}
export default answerQuestion