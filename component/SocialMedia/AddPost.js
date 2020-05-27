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
function AddPost() {
    const [open,setOpen]=useState(false);
    const [uploadImage,setUploadImage]=useState(null)
    const [PreviewImage,setPrevieImage]=useState(null)
    const [description,setDescription]=useState()
    const sendPostToDb=()=>{
        const formData=new FormData()
        formData.append('postImage',uploadImage);
        formData.append('description',description)
        axios.post('http://localhost:8080/postImage',formData).then(res=>console.log(res.data)).catch(res=>res.data)
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
    </Fragment>
)
}
export default AddPost