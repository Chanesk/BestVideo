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
    const {user, showSidebar,userId, setUserId, linkInsta, linkFacebook, linkTwitter}= useContext(UserContext);
    const [inputSearch, setInputSearch] = useState('');
    const [profil, setProfil] = useState('');
    const [profilExist, setProfilExist] = useState(false);
  
    const showProfil = () =>{
      setProfil(profil)
    }

  const ProfilBox = () =>{
    if(profilExist == true){
      return(
        <div className='profil-box' >
          <div className='profil-box-info'>
            <CreateIcon /><p>Modifier le profile</p>
          </div>
        </div>
      )
    }
  }
  return(
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
                <Avatar alt={user.name} src={user.profileImg} onClick={()=>{
                  setProfilExist(!profilExist)
                  showProfil()
                }}/>
            </div>

        </div>
        <Link to={'/modifyprofil'}>
          <ProfilBox/>  
        </Link>
    </div>
  )
    
}

export default Header