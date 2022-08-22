import classes from './asseenon.module.css';

function AsSeenOn() {
    return(
        
            <div className={classes['main']}>
                <div>
                    <p className={classes['ass-seen-on']}> AS SEEN ON</p>
                </div>
                <div className={classes['seen__block']}>
                    <div className={classes['seen__block__boxes']}>
                        <img className={classes['seen__img']} src='img/Darling.png' alt=''/>
                    </div>
                    <div className={classes['seen__block__boxes']}>
                        <img className={classes['seen__img']} src='img/Forbes.png' alt=''/>
                    </div>
                    <div className={classes['seen__block__boxes']}>
                        <img className={classes['seen__img']} src='img/The-Good-Trade.png' alt=''/>
                    </div>
                </div>
                <div className={classes['seen__block']}>
                    <div className={classes['seen__block__boxes']}>
                        <img className={classes['seen__img']} src='img/Brit+co.png' widt=''alt=''/>
                    </div>
                    <div className={classes['seen__block__boxes']}>
                        <img className={classes['seen__img']} src='img/Zoe-Report.png' alt=''/>
                    </div>
                    <div className={classes['seen__block__boxes']}>
                        <img className={classes['seen__img']} src='img/Huff-Post.png' alt=''/>
                    </div>
                </div>
            </div>
        
    )
}

export default AsSeenOn