import Grid from "@material-ui/core/Grid";
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from "@material-ui/core/Button";
import {TextField} from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
function InputChat(props) {
    return(
        <Grid container spacing={1} alignItems="flex-end" style={{position:'fixed',bottom:20}}>
            <Grid item>
                <AccountCircle fontSize={"large"}/>
            </Grid>
            <Grid item xs={9}>
                <TextField
                    label="Message"
                    placeholder="Write your Message..."
                    fullWidth
                    value={props.message}
                    onChange={props.setMessage}/>
            </Grid>
            <Grid item xs={2}>
                <Button
                    variant="contained"
                    color="primary"
                    endIcon={<Icon>send</Icon>}
                    onClick={props.sendMessage}
                >
                    Send
                </Button>
            </Grid>
        </Grid>
    )
}
export default InputChat