import React from 'react';
// import { useEffect, useState } from 'react';
// import { useContext } from 'react';
// import { UserContext } from '../../ContextBox/ContextBox';
// import { Link } from 'react-router-dom';
import './SideBarRow.css';

const SideBarRow= ({selected, Icon, title}) => {
//     const [channel, setChannel]= useState([]);
//    const {data}= useContext(UserContext);
//         useEffect(()=> { fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=9&regionCode=PK&key=AIzaSyBgDejVRUB1-sRFR8tMY1nm8VZb8jPz_o0`)

//         .then(response =>{
//             return response.json()
//         })
//         .then(data =>{
//             setChannel(data.items);
//             console.log(data.items);
    
//         })
//         .catch((error)=> console.log(error))
//     },[])
    return(
        <>
        
            <div className={`sidebarrow ${selected? 'selected':''} `}>
                <Icon className='sidebarrow-icon' />
                <h2 className='sidebarrow-title'>{title}</h2>
            </div>
        
        </>
    )
}

export default SideBarRow