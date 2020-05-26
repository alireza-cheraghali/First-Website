import  clsx from "clsx";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AppBar from "@material-ui/core/AppBar";
import React, {useEffect, useState} from "react";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import axios from 'axios'
import AccountCircle from '@material-ui/icons/AccountCircle';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Avatar from '@material-ui/core/Avatar';
import PropTypes from 'prop-types'
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginRight: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    title:{
        flexGrow:1,
    },
}));
function CustomAppBar(props) {
    const [state, setState] = React.useState({
        checkedB: false,
    });
    const [prevImage,setPrevImage]=useState()
const perviewImage=()=>{

}
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
        if(state.checkedB===true){
            document.body.style.backgroundColor='white'
            document.body.style.color='black'
        }else{
            document.body.style.backgroundColor='rgb(53, 56, 61)'
            document.body.style.color='white'
        }
    };
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const [username,setUsername]=useState()
    const [profilePicture,setProfilePicture]=useState()
    const AddPorfilePicture=async(e)=>{
        setProfilePicture(e.target.files[0])
        const formData=new FormData()
        formData.append('profilePicture',profilePicture)
        formData.append('username',username)
        axios.post('http://localhost:8080/getUserInformation',{formData}).then(res=>console.log(res.data)).catch(res=>console.log(res.data))
        console.log(profilePicture)
    }
        useEffect(()=>{
        setUsername(localStorage.getItem('username'))
        axios.post('http://localhost:8080/getUserInformation',{username}).then(res=>console.log(res)).catch(res=>console.log(res))
    },[username])
return(
    <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
            [classes.appBarShift]: props.open,
        })}
    >
        <Toolbar>
            <div className={classes.title}>
                {/*<IconButton aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <IconButton aria-label="show 17 new notifications" color="inherit">
                    <Badge badgeContent={17} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>*/}
                <IconButton
                    edge="end"
                    aria-haspopup="true"
                    color="inherit"
                    aria-label="upload picture" component="span"
                >
                    {username}
                    <input
                        accept="image/*"
                        className={classes.input}
                        id="icon-button-file"
                        type="file"
                        onChange={(e)=>{setPrevImage(URL.createObjectURL(e.target.files[0]));AddPorfilePicture(e)}}
                        style={{display:'none'}}/>
                    <label htmlFor="icon-button-file">

                    <Avatar
                        alt="Ted talk"
                        src={prevImage?prevImage:null }
                    />
                    </label>
                </IconButton>
                <FormControlLabel
                    style={{marginLeft:8}}
                    control={
                        <Switch
                            checked={state.checkedB}
                            onChange={handleChange}
                            name="checkedB"
                        />
                    }
                    label={state.checkedB===false ? <WbSunnyIcon style={{marginBottom:'-2%'}}/> : <Brightness3Icon style={{marginBottom:'-2%'}}/>}
                />
            </div>
            <Typography style={{textAlign:'start'}} variant="h6" noWrap className={classes.title}>
                {props.title}
            </Typography>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={props.handleDrawerOpen}
                className={clsx(props.open && classes.hide)}
            >
                <MenuIcon />
            </IconButton>
        </Toolbar>
    </AppBar>
)
}
CustomAppBar.propTypes={
    open:PropTypes.bool,
    title:PropTypes.string,
    handleDrawerOpen:PropTypes.func,
}
export default CustomAppBar