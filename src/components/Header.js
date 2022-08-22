import React from 'react';
import classes from'./Header.module.css';
import Navbar from './Navbar';


function Header(){
    return(

        <div className={classes['header']}>
            <div className={classes['div-logo']}>
                <a href='#'>
                    <img className={classes['logo']}src="img/Wordmark.png" alt=''/>
                </a>
                
            </div>
            
            <div className={classes['navbar-div']}>
                <Navbar/>
            </div>
        </div>
       
    )
}

export default Header