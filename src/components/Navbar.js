import React, { useState } from 'react';
import classes from'./Navbar.module.css';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'


function Navbar(){
    const [showMenu, setShowMenu] = useState(false)

    return(
        
        <div className={classes['navbar']}>
            <div className={classes['menu-icons']} onClick ={()=>{setShowMenu(!showMenu)}}>
                {showMenu ? <AiOutlineClose/>  : <AiOutlineMenu/>}
                
            </div>
            <ul className={showMenu? classes['ul_items_none'] : classes['ul_items']}>
                <li className={classes['items']}>
                    <a className={classes['navbar-link']}href='https://yellowco.co/events'>PODCAST</a>
                </li>
                <li className={classes['items']}>
                    <a className={classes['navbar-link']}href='https://yellowco.co/events'>EVENTS</a>
                </li>
                <li className={classes['items']}>
                    <a className={classes['navbar-link']} href='https://yellowco.co/guidance-groups'>SGUIDANCE GROUPS</a>
                </li>
                <li className={classes['items']}>
                    <a className={classes['navbar-link']} href='https://yellowco.co/membership'>BECOME A MEMBER</a>
                </li>
            </ul>
            
        </div>
    )
}

export default Navbar