import Grid from "@material-ui/core/Grid";
import {TextField} from "@material-ui/core";
import AccountCircle from '@material-ui/icons/AccountCircle';
function MessageList(props) {
    return(
        <div>
        {props.messageList.map((val,index)=>
            <div key={index} style={{transition:'500s'}}>
                {props.username===val.user
                    ?
                    <Grid container spacing={1} alignItems="flex-end" style={{direction:'rtl'}}>
                        <Grid item>
                            <AccountCircle />
                        </Grid>
                        <Grid item xs={10}>
                            <TextField style={{backgroundColor:'purple',textAlignLast:'right',borderTopRightRadius:40,borderTopLeftRadius:40,borderBottomLeftRadius:40,direction:'ltr'}} color={"white"} disabled fullWidth value={`${val.text}:${val.user}`}/>
                        </Grid>
                    </Grid>
                    :
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                            <AccountCircle />
                        </Grid>
                        <Grid item xs={10}>
                            <TextField style={{backgroundColor:'green',borderTopRightRadius:40,borderTopLeftRadius:40,borderBottomLeftRadius:40}} color={"white"} disabled fullWidth value={`${val.user}:${val.text}`}/>
                        </Grid>
                    </Grid>}
            </div>
        )}
        <style jsx global>{`
        .MuiInputBase-input.Mui-disabled{
        color:white;
        }
        .MuiInput-underline.Mui-disabled:before{
        border-bottom-style:none;
        }
        .MuiInput-underline:before{
        border-bottom:0!important;
        }
        `}
        </style>
        </div>
    )
}
export default MessageList