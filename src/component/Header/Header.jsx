import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../ContextBox/ContextBox';
import  './Header.css';
import {Link} from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import NotificationsIcon from '@material-ui/icons/Notifications';
import  Avatar  from '@material-ui/core/Avatar';
function Header() {
    const {data}= useContext(UserContext);
    console.log({data});
    return (
        <div className='header'>
            <div className='header-left'>
               <MenuIcon className='icon-menu'/>
               <Link to='/'>
                <h2>BESTVIDEO</h2> 
               </Link>
            </div>
            <div className='header-center'>
                <SearchIcon className='icon-search'/>
                <input type='text' placeholder='Rechercher' />
            </div>
            <div className='header-right'>
                <VideoCallIcon className='header-icon' />
                <NotificationsIcon className='header-icon' />
                <Avatar alt='chacha' src={data.profileImg} />
            </div>

        </div>
    )
}

export default Header