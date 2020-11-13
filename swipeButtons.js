import React from 'react';
import './swipeButtons.css';
import SportsKabaddiIcon from '@material-ui/icons/SportsKabaddi';
import CloseIcon from '@material-ui/icons/Close';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';


function swipeButtons() {
    return (
        <div className= 'swipeButtons'>
            <IconButton className= 'swipeButtons__pelea'> 
            <SportsKabaddiIcon  fontSize= 'large'/>
            </IconButton>
            <IconButton className= 'swipeButtons__important'>
            <ImportantDevicesIcon fontSize='large'/>
            </IconButton>
            <IconButton className= 'swipeButtons__flashOn'>
            <FlashOnIcon fontSize='large'/>
            </IconButton>
            <IconButton className= 'swipeButtons__favorite'>
            <FavoriteIcon fontSize='large'/>
            </IconButton>
            <IconButton className= 'swipeButtons__close'>
            <CloseIcon fontSize='large'/>
            </IconButton>




        </div>
    )
}

export default swipeButtons
