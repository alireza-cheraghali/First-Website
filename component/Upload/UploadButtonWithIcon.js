import {Fragment} from 'react'
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
function UploadButtonWithIcon(props) {
    return(
        <Fragment>
            <input accept={props.accept}  id="icon-button-file" type="file" multiple={props.multiple} style={{display:'none'}} onChange={props.onChange}/>
            <label htmlFor="icon-button-file">
                <IconButton color={props.color || "primary"} aria-label="upload picture" component="span" style={props.style}>
                    <PhotoCamera />
                </IconButton>
            </label>
        </Fragment>
    )
}
export default UploadButtonWithIcon