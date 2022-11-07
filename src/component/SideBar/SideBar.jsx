import React from 'react';
import SideBarRow from '../SideBarRow/SideBarRow';
import SubscriptionIcon from '@material-ui/icons/Subscriptions';
import './SideBar.css';
import HomeIcon from '@material-ui/icons/Home';
import { useContext } from 'react';
import { UserContext } from '../../ContextBox/ContextBox';
import ChannelSubscription from '../ChannelSubscription/ChannelSubscription';

const SideBar = () =>{
    const {sidebar}= useContext(UserContext) 
    return (
        <>
                <div className='sidebar' style={{width: sidebar? "0%" : "20%"}}>
                    <SideBarRow Icon={HomeIcon} title='Home' />
                    <div className='video-sub'>
                        <SideBarRow Icon={SubscriptionIcon} title ='Subscription' className='title-sub'/>
                        <div className='box-video-sub'>
                            <ChannelSubscription />
                        </div>
                    </div>
                </div>
           
        </>
    )
        
}

export default SideBar