import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
import Backdrop from "@material-ui/core/Backdrop/Backdrop";
import {makeStyles} from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));
function Loading(props) {
    const classes=useStyles()
    return(
        <Backdrop open={props.loading} className={classes.backdrop} onClick={props.onClick}>
            {props.children || <CircularProgress color="inherit" />}
        </Backdrop>
    )
}
export default Loading