import InputChat from "../component/Chat/InputChat";
import Layout from "../component/Layout/Layout";
import {useEffect, useState} from "react";
import io from 'socket.io-client'
import {useRouter} from "next/router";
import MessageList from "../component/Chat/MessageList";
var socket;
function chat({location}) {
    const [messageList,setMessageList]=useState([])
    const [message,setMessage]=useState('')
    const router=useRouter()
    const {username,room}=router.query
    const ENDPOINT='http://localhost:8080'
    useEffect(()=>{
        socket=io(ENDPOINT);
        socket.emit('join',{username,room})
        return ()=> {
            socket.emit('disconnect')
                socket.off()
        }

    },[ENDPOINT,router]);
    useEffect(()=>{
        socket.on('message',(message)=>{
            setMessageList([...messageList,message])
        })
        return ()=>{
            socket.emit('disconnect')
            socket.off()
        }
    },[messageList]);
    const sendMessage=()=>{
        socket.emit('sendMessage',message,()=>{
            setMessage('')
        })
    }
    console.log(messageList)
    return(
        <Layout title={`${room} Room`}>
            <MessageList messageList={messageList} username={username}/>
        <InputChat message={message} setMessage={(e)=>setMessage(e.target.value)} sendMessage={()=>sendMessage()}/>
        </Layout>
    )
}
export default chat