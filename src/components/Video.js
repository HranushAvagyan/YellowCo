import classes from'./Video.module.css';

function Video(){
    return(
        
            <div className={classes['video']}>
                <iframe className={classes['video-item']} src="https://www.youtube.com/embed/OdhabxHGxsA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        
    )
}
export default Video