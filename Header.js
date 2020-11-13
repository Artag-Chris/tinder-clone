import React from 'react';
import "./Header.css";
import FaceIcon from '@material-ui/icons/Face';
import IconButton from '@material-ui/core/IconButton';
import logo from "./logo.png"
import ForumIcon from '@material-ui/icons/Forum';

function Header() {
    return (
        <div className= 'Header'>
         <IconButton>
            <FaceIcon fontSize= "large" className= "header--icon"/>
         </IconButton>
            
            <img
             className= "header--logo"
             src= {logo}
             alt=""
            />
         <IconButton>  
            <ForumIcon fontSize= "large" className= "header--icon"/>
         </IconButton>   
            
        </div>
    )
}

export default Header
