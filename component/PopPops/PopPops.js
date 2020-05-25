import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions/DialogActions";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog/Dialog";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
function PopPops(props) {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    return(
        <Dialog
            fullScreen={fullScreen}
            open={props.open}
            aria-labelledby="responsive-dialog-title"
        >
            <DialogTitle id="responsive-dialog-title">
                {props.title}
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {props.children}
                </DialogContentText>
            </DialogContent>
            {props.haveAction ?
                <DialogActions>
                    <Button autoFocus onClick={props.handleClose} color="primary">
                        Disagree
                    </Button>
                    <Button onClick={props.Submit} color="primary" autoFocus>
                        Submit
                    </Button>
                </DialogActions>
                :
                <DialogActions>
                    <Button autoFocus onClick={props.handleClose} color="primary">
                        Ok
                    </Button>
                </DialogActions>
            }
        </Dialog>
    )
}
export default PopPops