import React from 'react';
import classes from'./Description.module.css';

function Description(){
    return(
        <div className={classes['description']}>
            <h1 className={classes['description-header']}>holistic support, accountability & community for your meaningful work</h1>
            <h2 className={classes['description-small']}>MEMBERSHIP, SMALL GROUP SUPPORT & EVENTS FOR ENTREPRENEURIAL-MINDED WOMEN</h2>
            <div className={classes['subscribe-button']} >
                <a className={classes['description-link']} href='#'>become a member</a>
            </div>
        </div>
        
    )
}

export default Description