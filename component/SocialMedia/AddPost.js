import Tooltip from "@material-ui/core/Tooltip/Tooltip";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/core/SvgIcon/SvgIcon";
import DeleteIcon from '@material-ui/icons/Delete';
import PopPops from "../PopPops/PopPops";
import {Fragment, useState} from "react";
import IconButton from "@material-ui/core/IconButton";
import {TextField} from "@material-ui/core";
import UploadButton from "../Upload/UploadButton";
import axios from "axios";
import TypeOfPost from "./TypeOfPost";
import {useSelector} from "react-redux";
function AddPost() {
    const [open,setOpen]=useState(false);
    const [uploadImage,setUploadImage]=useState(null)
    const [PreviewImage,setPrevieImage]=useState(null)
    const [Post,setPost]=useState(null)
    const [description,setDescription]=useState()
    const checkType=useSelector(state=>state.TypeOfPost)
    const sendPostToDb=()=>{
        const formData=new FormData()
        /*formData.append('postImage',uploadImage);*/
        formData.append('description',description);
        formData.append('post',Post);
        axios.post(`http://localhost:8080/post${checkType}`,{description,Post}).then(res=>console.log(res.data)).catch(res=>res.data)
    }
    const previewImage=(e)=>{
        const createURL=URL.createObjectURL(e.target.files[0])
        setPrevieImage(createURL)
    }
return(
    <Fragment>
    <Tooltip title="Add New Post" aria-label="add" style={{position:"fixed",bottom:5}}>
        <Fab color="secondary"  onClick={()=>setOpen(true)}>
            <AddIcon/>
        </Fab>
    </Tooltip>
    <PopPops open={open} title={"ایجاد پست"} handleClose={()=>setOpen(false)} Submit={()=>{sendPostToDb();setOpen(false)}} haveAction>
        <span > نوع پست خود را انتخاب کنید</span>
        <br/>
        <TypeOfPost/>
        {checkType!=null && <TextField
            id="standard-basic"
            label="Caption"
            fullWidth
            multiline
            onChange={(e)=>setDescription(e.target.value)}
            style={{marginTop:10}}/>}
        {checkType==="Audio" && <div>
            <p>
            لطفا صوت خود را آپلود کنید
            </p>
            <UploadButton onChange={(e) =>
            {previewImage(e);setUploadImage(e.target.files[0])}}
            style={{marginTop: 10}}
            accept={"audio/*"}>
                Upload
            </UploadButton>
        </div>}
        {checkType==="Video" && <div>
        <p>
            لطفا ویدیو خود را آپلود کنید
        </p>
            <UploadButton onChange={(e) =>
            {previewImage(e);setUploadImage(e.target.files[0])}}
            style={{marginTop: 10}}
            accept={"video/*"}>
                Upload
            </UploadButton>
        </div>
        }
        {checkType==="Image" && <div>
            <p>
            لطفا عکس خود را آپلود کنید
            </p>
            <UploadButton onChange={(e) =>
            {previewImage(e);setUploadImage(e.target.files[0])}}
            style={{marginTop: 10}}
            accept={"image/*"}>
                Upload
            </UploadButton>
        </div>}
        {checkType==="Text" && <div>
            <p>
            لطفا متن خود را بنویسید
            </p>
            <TextField
                id="outlined-multiline-static"
                label="Text"
                multiline
                rows={4}
                placeholder={"Write Your Text"}
                variant="outlined"
                onChange={(e)=>setPost(e.target.value)}
            />
        </div>}
    {PreviewImage &&
    <Fragment>
        <img src={PreviewImage} width={64} height={64} style={{marginBottom:20,display:PreviewImage?'block':'none',position:'relative',marginTop:20}}/>
        <IconButton aria-label="delete" onClick={()=>setPrevieImage(null)} style={{position:'absolute',bottom: '24%',left:'2%'}}>
            <DeleteIcon/>
        </IconButton>
    </Fragment>
    }
</PopPops>
    </Fragment>
)
}
export default AddPost