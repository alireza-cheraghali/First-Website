import  Layout from "../component/Layout/Layout";
import {useState, Fragment, useEffect} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import axios from 'axios'
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';
import {TextField} from "@material-ui/core";
import UploadButton from "../component/Upload/UploadButton";
import PopPops from "../component/PopPops/PopPops";
import PostCard from "../component/SocialMedia/PostCard";

function socialMedia() {
    const [likes,setLikes]=useState(false);
    const [open,setOpen]=useState(false);
    const [postList,setPostsList]=useState([])
    const [uploadImage,setUploadImage]=useState(null)
    const [PreviewImage,setPrevieImage]=useState(null)
    const [description,setDescription]=useState()
    const [loading,setLoading]=useState()
    const sendPostToDb=()=>{
        const formData=new FormData()
        formData.append('postImage',uploadImage);
        formData.append('description',description)
        axios.post('http://localhost:8080/postImage',formData).then(res=>console.log(res.data)).catch(res=>res.data)
    }
    useEffect(()=>{
        setLoading(true)
        axios.get('http://localhost:8080/postImage').then(res=>{setPostsList(res.data);setLoading(false)}).catch(res=>console.log(res))
    },[open])
    const previewImage=(e)=>{
        const createURL=URL.createObjectURL(e.target.files[0])
        setPrevieImage(createURL)
    }
    console.log(postList)
    return(
        <Layout title={"Social Media"} >
            <Fragment>
                <Tooltip title="Add New Post" aria-label="add" style={{position:"fixed",bottom:5}}>
                <Fab color="secondary"  onClick={()=>setOpen(true)}>
                    <AddIcon />
                </Fab>
            </Tooltip>
                <PopPops open={open} title={"ایجاد پست"} handleClose={()=>setOpen(false)} Submit={()=>{sendPostToDb();setOpen(false)}} haveAction>
                    برای پست خود یک توضیح بنویسید.
                    {PreviewImage &&
                    <Fragment>
                        <img src={PreviewImage} width={64} height={64} style={{marginBottom:20,display:PreviewImage?'block':'none',position:'relative'}}/>
                        <IconButton aria-label="delete" onClick={()=>setPrevieImage(null)} style={{position:'absolute',top: '24%',left:'4%'}}>
                            <DeleteIcon/>
                        </IconButton>
                    </Fragment>
                    }
                    <TextField id="standard-basic" label="Caption" fullWidth multiline onChange={(e)=>setDescription(e.target.value)}/>
                    <UploadButton onChange={(e)=>{previewImage(e);setUploadImage(e.target.files[0])}} style={{marginTop:10}} accept={"image/*"}>Upload</UploadButton>
                </PopPops>
                {postList!=null ? postList.map((val,index)=><div key={index} style={{width:500,margin:'auto',textAlign:'end'}}>
                    <PostCard loading={loading} Description={val.Description} postImage={`/static/postImage/${val.PostPath}`}/>
                    </div>)
                    :
                    <img src={'/static/no-post'} />}
                {/*<img src={`/static/postImage/${val.PostPath}`} style={{width:'100%',height:400,maxHeight:'100%',maxWidth:'100%'}}/><span>{val.Description}</span></div>)*/}

            </Fragment>
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