import React, {useState} from 'react';
import { useContext } from 'react';
import axios from 'axios';
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
import CreateIcon from '@material-ui/icons/Create';

function Header() {
    const {user, showSidebar}= useContext(UserContext);
    const [inputSearch, setInputSearch] = useState('');

  
    const getDataUser = async() =>{
  try{
    const request = await axios(
    {
      url:"http://localhost:5500/",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        name: user.name,
        avatarUrl:user.profileImg,
        facebook: "linkFacebook",
        twitter:"linkTwitter",
        linkInsta:"instagram",
        email:user.email 
      }
    }).then((response)=> 
          console.log(response.data.message)
    )
  }
  catch(error){
    console.log({error})
  }
}

    getDataUser();

    // 
    return (
      <div className='header-box'>
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
        <div className='profil-box'>
          <div className='profil-box-info'>
            <CreateIcon /><p>Modifier le profile</p>
          </div>
        </div>
    </div>
    )
}

export default Header