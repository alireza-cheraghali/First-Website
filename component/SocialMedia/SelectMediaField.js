import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import PhotoAlbumIcon from '@material-ui/icons/PhotoAlbum';
import MovieIcon from '@material-ui/icons/Movie';
import MessageIcon from '@material-ui/icons/Message';

const useStyles = makeStyles({
    root: {
        width: 500,
    },
});

export default function SelectMediaField() {
    const classes = useStyles();
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <BottomNavigation value={value} onChange={handleChange} className={classes.root} style={{position:'fixed',bottom:0,width:'100%'}}>
            <BottomNavigationAction label="Recent" value="recent" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Image" value="image" icon={<PhotoAlbumIcon/>} />
            <BottomNavigationAction label="Text" value="text" icon={<MessageIcon/>} />
            <BottomNavigationAction label="Video" value="video" icon={<MovieIcon/>} />
        </BottomNavigation>
    );
}
