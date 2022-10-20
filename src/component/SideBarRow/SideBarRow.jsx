import React from 'react';
import Home from '../Home/Home'
import { Link } from 'react-router-dom';
import './SideBarRow.css';

const SideBarRow= ({selected, Icon, title}) => {

    return(
        <>

             <Link to={<Home />}  > 
                <div className={`sidebarrow ${selected? 'selected':''} `}>
                    <Icon className='sidebarrow-icon' />
                    <h2 className='sidebarrow-title'>{title}</h2>
                </div>
             </Link>
        </>
    )
}

export default SideBarRow