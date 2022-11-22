import React, {useState} from 'react';
import { useContext } from 'react';
import { UserContext } from '../../ContextBox/ContextBox';
import Logout from './Logout/Logout';
import  './Header.css';
import {Link} from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import  Avatar  from '@material-ui/core/Avatar';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';


function Header() {
    const {user, showSidebar}= useContext(UserContext);
    const [inputSearch, setInputSearch] = useState('');

    return (
        <div className='header'>
            <div className='header-left'>
               <MenuIcon className='icon-menu' onClick={showSidebar}/>
               <Link to='/'>
                <h2>BESTVIDEO</h2> 
               </Link>
            </div>
            <div className='header-center'>
                <Link to={`/search/${inputSearch}`} >
                    <SearchIcon className='icon-search'/>
                </Link>
                <input type='text'onChange={(e) =>setInputSearch(e.target.value)} value={inputSearch} placeholder='Rechercher'/>
            </div>
            <div className='header-right'>
                <Logout />
                <div className='header-reseaux-social'>
                    <InstagramIcon className='header-icon' />
                    <FacebookIcon className='header-icon' />
                    <TwitterIcon className='header-icon' />
                    <NotificationsIcon className='header-icon' />
                </div>
                <Avatar alt={user.name} src={user.profileImg} />
            </div>

        </div>
    )
}

export default Header