import React from 'react';
import SideBarRow from '../SideBarRow/SideBarRow';
import SubscriptionIcon from '@material-ui/icons/Subscriptions';
import VideoSubcription from '../VideoSubcription/VideoSubcription';
import './SideBar.css';
import HomeIcon from '@material-ui/icons/Home';

const SideBar = () =>{
    return (
        <>
                <div className='sidebar'>
                    <SideBarRow Icon={HomeIcon} title='Home' />
                    <SideBarRow Icon={SubscriptionIcon} title ='Subscription' />
                    <h2></h2>
                    <VideoSubcription />
                </div>
           
        </>
    )
        
}

export default SideBar