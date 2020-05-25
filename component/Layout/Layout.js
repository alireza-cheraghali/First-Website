import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import CustomDrawer from "./CustomDrawer";
import CustomAppBar from "./CustomAppBar";
import Footer from "./Footer";
import PropTypes, {elementType} from "prop-types";
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

export default function Layout(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root} style={{position:'relative'}}>
            <CssBaseline />
            <CustomAppBar title={props.title} handleDrawerOpen={handleDrawerOpen} open={open}/>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                {props.children}
            </main>
            <CustomDrawer open={open} handleDrawerClose={handleDrawerClose}/>
            {/*<Footer/>*/}
        </div>
    );
}
Layout.propTypes={
    title:PropTypes.string,
};