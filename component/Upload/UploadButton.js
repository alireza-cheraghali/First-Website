import {Fragment} from 'react'
import Button from "@material-ui/core/Button";
function UploadButton(props) {
    return(
        <Fragment>
        <input
            accept={props.accept}
            id="contained-button-file"
            multiple={props.multiple}
            type="file"
            style={{display:'none'}}
            onChange={props.onChange}
        />
        <label htmlFor="contained-button-file">
        <Button variant={props.variant || "contained"} color={props.color || "primary"} component="span"  style={props.style}>
            {props.children}
    </Button>
        </label>
        </Fragment>
    )
}
export default UploadButton