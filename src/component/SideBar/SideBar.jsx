import React from 'react';
import SideBarRow from '../SideBarRow/SideBarRow';
import './SideBar.css';
import WatchLaterIcon from '@material-ui/icons/WatchLater';

const SideBar = () =>{
    return (
        <div className='sidebar'>
            <SideBarRow Icon={WatchLaterIcon} title='Watch later' />
        </div>
    )
}

export default SideBar