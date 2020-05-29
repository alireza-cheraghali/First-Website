import {Fragment, useState} from 'react'
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import VideocamIcon from '@material-ui/icons/Videocam';
import AudiotrackIcon from '@material-ui/icons/Audiotrack';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import ImageIcon from '@material-ui/icons/Image';
import Button from '@material-ui/core/Button';
import {useDispatch,useSelector} from "react-redux";
import {SetTypeOfPost} from "../../redux/actions/SetTypeOfPost";
function TypeOfPost(){
    const [type,setType]=useState(null)
    const dispatch=useDispatch()
    const checkType=useSelector(state=>state.TypeOfPost)
    return(
        <Fragment>
            <Button
                variant="contained"
                value="Audio"
                onClick={(e)=>{checkType==='Sound' ? setType(null) : dispatch(SetTypeOfPost("Audio"))}}
                color={checkType==='Audio' ? "secondary" : "default"}
                size="small"
                startIcon={<AudiotrackIcon/>}
            >
                Sound
            </Button>
            <Button
                style={{marginLeft:7}}
                size="small"
                variant="contained"
                value="Video"
                onClick={(e)=>{checkType==='Video' ? setType(null) : dispatch(SetTypeOfPost("Video"))}}
                color={checkType==='Video' ? "secondary" : "default"}
                startIcon={<VideocamIcon/>}
            >
                Video
            </Button>
            <Button
                style={{marginLeft:7}}
                size="small"
                variant="contained"
                value="Text"
                onClick={(e)=>{checkType==='Text' ? setType(null) : dispatch(SetTypeOfPost("Text"))}}
                color={checkType==='Text' ? "secondary" : "default"}
                startIcon={<TextFieldsIcon/>}
            >
                Text
            </Button>
            <Button
                style={{marginLeft:7}}
                size="small"
                variant="contained"
                value="Image"
                onClick={(e)=>{checkType==='Image' ? setType(null) : dispatch(SetTypeOfPost("Image"))}}
                color={checkType==='Image' ? "secondary" : "default"}
                startIcon={<ImageIcon/>}
            >
                Image
            </Button>
        </Fragment>
    )
}
export default TypeOfPost