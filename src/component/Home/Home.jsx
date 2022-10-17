import React from 'react';
import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';
import ViewVideo from '../ViewVideo/ViewVideo';
import './Home.css'

const Home = () =>{

    return(
        <>
        <div>
            <Header />
        </div>
        <div className='video-box'>
            <SideBar />
            <ViewVideo />
        </div>
        </>
    )
}

export default Home