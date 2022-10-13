import React from 'react';
import SideBarRow from '../SideBarRow/SideBarRow';
import VideoSubcription from '../VideoSubcription/VideoSubcription';
import './SideBar.css';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';

const SideBar = () =>{
    return (
        <div className='sidebar'>
            <SideBarRow Icon={SubscriptionsIcon} title='Subcription' />
            <VideoSubcription />
        </div>
    )
}

export default SideBar