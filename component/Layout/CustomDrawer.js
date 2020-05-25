import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ListItemText from "@material-ui/core/ListItemText";
import Drawer from "@material-ui/core/Drawer";
import PropTypes from 'prop-types'
import {makeStyles, useTheme} from "@material-ui/core/styles";
import ContactsIcon from '@material-ui/icons/Contacts';
import Link from "next/link";
import React, {useState} from "react";
import Loading from "../Loading";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
}));

function CustomDrawer(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [loading,setLoading]=useState(false)
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
return(
    <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
            [classes.drawerOpen]: props.open,
            [classes.drawerClose]: !props.open,
        })}
        classes={{
            paper: clsx({
                [classes.drawerOpen]: props.open,
                [classes.drawerClose]: !props.open,
            }),
        }}
        anchor={"right"}
    >
        <div className={classes.toolbar}>
            <IconButton onClick={props.handleDrawerClose}>
                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
        </div>
        <Divider />
        <List>
            {['loginChat', 'infoPannel', 'socialMedia', 'Drafts'].map((text, index) => (
                <ListItem button key={text} onClick={()=>setLoading(true)}>
                    <Link href={`/${text}`}><ListItemIcon>{index % 2 !== 0 ? <ContactsIcon/>: <MailIcon />}</ListItemIcon></Link>
                    <ListItemText primary={text} />
                </ListItem>
            ))}

        </List>
        <Divider />
        <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
                <ListItem button key={text} onClick={()=>setLoading(true)}>
                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                    <ListItemText primary={text} />
                </ListItem>
            ))}
            <ListItem button onClick={()=>{setLoading(true);localStorage.removeItem('token');localStorage.removeItem('username')}}>
                <Link href={'/'}>
                    <ListItemIcon><ExitToAppIcon color={"inherit"}/></ListItemIcon>
                </Link>
                <ListItemText>Exit</ListItemText>

            </ListItem>
        </List>
        <Loading loading={loading} onClick={()=>setLoading(false)}/>
    </Drawer>
)
}
CustomDrawer.propTypes={
    open:PropTypes.bool,
    handleDrawerClose:PropTypes.func
}
export default CustomDrawer