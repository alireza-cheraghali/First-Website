import Layout from "../component/Layout/Layout";
import {useEffect, useState,Fragment} from "react";
import axios from 'axios'
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
function answerQuestion() {
    const [questionList,setQuestionList]=useState([])
    const [answerSheet,setAnswerSheet]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:8080/question/getQuestion").then(res=>{setQuestionList(res.data);console.log(res)})
    },[])
    return(
        <Layout>
            {questionList.length>=1 ?
                <ol style={{direction:"rtl"}}>
                    {questionList.map((val,index) =>
                        <div key={index}>
                            <Typography variant={"h5"}>{val.Question}</Typography>
                            <div>
                            <Button
                                variant={"contained"}
                                color={"primary"}
                                size={"small"}
                                onClick={(e)=>{setAnswerSheet([...answerSheet,{Question_ID:val.Question_ID,option:1}])}}>
                                1
                            </Button>
                                <Typography variant={"h6"}>{val.Option1}</Typography>
                            </div>
                            <div>
                                <Button
                                    variant={"contained"}
                                    color={"primary"}
                                    size={"small"}
                                    onClick={(e)=>setAnswerSheet([...answerSheet,{Question_ID:val.Question_ID,option:2}])}>
                                    2
                                </Button>
                                <Typography variant={"h6"}>{val.Option2}</Typography>
                            </div>
                            <div>
                                <Button
                                    variant={"contained"}
                                    color={"primary"}
                                    size={"small"}
                                    onClick={(e)=>setAnswerSheet([...answerSheet,{Question_ID:val.Question_ID,option:3}])}>
                                    3
                                </Button>
                                <Typography variant={"h6"}>{val.Option3}</Typography>
                            </div>
                            <div>
                                <Button
                                    variant={"contained"}
                                    color={"primary"}
                                    size={"small"}
                                    onClick={(e)=>setAnswerSheet([...answerSheet,{Question_ID:val.Question_ID,option:4}])}>
                                    4
                                </Button>
                                <Typography variant={"h6"}>{val.Option4}</Typography>
                            </div>
                        </div>
                    )}
                </ol>
                :
                <div>No Question</div>
            }
        </Layout>
    )
}
export default answerQuestion