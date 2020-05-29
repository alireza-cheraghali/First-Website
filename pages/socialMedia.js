import  Layout from "../component/Layout/Layout";
import {useState, Fragment, useEffect} from "react";
import axios from 'axios'
import PostCard from "../component/SocialMedia/PostCard";
import SelectMediaField from "../component/SocialMedia/SelectMediaField";
import AddPost from "../component/SocialMedia/AddPost";
import {GetAxios} from "../component/Axios";

function socialMedia() {
    const [likes,setLikes]=useState(false);
    const [open,setOpen]=useState(false);
    const [postList,setPostsList]=useState([])
    const [loading,setLoading]=useState()

    useEffect(()=>{
        setLoading(true);
        axios.get('http://localhost:8080/postImage').then(res=>{setPostsList(res.data);setLoading(false)}).catch(res=>console.log(res))
    },[open])
    console.log(postList)
    return(
        <Layout title={"Social Media"} >
            <SelectMediaField/>
            <AddPost/>
                {postList!=null ? postList.map((val,index)=><div key={index} style={{width:500,margin:'auto',textAlign:'end'}}>
                    <PostCard loading={loading} Description={val.Description} postImage={`/static/postImage/${val.PostPath}`}/>
                    </div>)
                    :
                    <img src={'/static/no-post'} />}
                {/*<img src={`/static/postImage/${val.PostPath}`} style={{width:'100%',height:400,maxHeight:'100%',maxWidth:'100%'}}/><span>{val.Description}</span></div>)*/}
            <style jsx global>{`
            .bgImage{
            margin:auto 20%
            }
            @media screen and (max-width:768px){
            .bgImage{
            margin:0
            }            
            }
            `}
            </style>
        </Layout>
    )
}
export default socialMedia