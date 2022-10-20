import React from 'react';
import SideBarRow from '../SideBarRow/SideBarRow';
import VideoSubcription from '../VideoSubcription/VideoSubcription';
import './SideBar.css';
import HomeIcon from '@material-ui/icons/Home';

const SideBar = () =>{
    return (
        <>
                <div className='sidebar'>
                    <SideBarRow Icon={HomeIcon} title='Home' />
                    <VideoSubcription />
                </div>
           
        </>
    )
        
}

export default SideBar