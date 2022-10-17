import React from 'react';
// import { useEffect, useState } from 'react';
// import { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { UserContext } from '../../ContextBox/ContextBox';
// import { Link } from 'react-router-dom';
import './SideBarRow.css';

const SideBarRow= ({selected, Icon, title}) => {

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