import React from 'react';
import classes from'./PodcastList.module.css';

function PodcastList(){
    return(
        <div className={classes['podcast']}>
            <h1 className={classes['podcast-header']}>
                <a className={classes['podcast-link']} href='https://yellowco.co/podcast'>from the podcast</a>
            </h1>
            <div className={classes['podcast-list']}>
                <div className={classes['podcast-item']}>
                    <div className={classes['podcast-img']}>
                        <img className={classes['podcast-img']} src='img/PodcastsImg1.jpg' alt=''/>
                    </div>
                    <div className={classes['podcast-img-header']}>
                        <p><b>WHY GOOD NEWS IS HARDER TO SWALLOW</b></p>
                    </div>
                    <div className={classes['podcast-description']}>
                        <i>WITH BRANDEN HARVEY, FOUNDER & CEO OF GOOD GOOD GOOD CO.</i>
                    </div>
                    <div className={classes['podcast-button']}>
                        <a className={classes['podcast-button-link']} href='#'>SEE EPIDSODE</a>
                    </div>
                </div>
                <div className={classes['podcast-item']}>
                    <div className={classes['podcast-img']}>
                        <img className={classes['podcast-img']} src='img/PodcastImg2.jpg' alt=''/>
                    </div>
                    <div className={classes['podcast-img-header']}>
                        <p>
                            <b>OWNING WHO YOU ARE (VS. WHO YOU THINK YOU SHOULD BE)</b>
                        </p>
                    </div>
                    <div className={classes['podcast-description']}>
                        <i>WITH REVEREND NICOLE GARCIA, FIRST LATINA TRANS WOMAN ORDAINED IN THE EVANGELICAL LUTHERAN CHURCH IN AMERICA</i>
                    </div>
                    <div className={classes['podcast-button']}>
                        <a className={classes['podcast-button-link']} href='#'>SEE EPIDSODE</a>
                    </div>
                </div>
                <div className={classes['podcast-item']}>
                    <div className={classes['podcast-img']}>
                        <img className={classes['podcast-img']} src='img/PodcastImg3.jpg' alt=''/>
                    </div>
                    <div className={classes['podcast-img-header']}>
                        <p>
                            <b>BUILDING A DO-GOOD BRAND THAT ISN’T ATTACHED TO YOUR IDENTITY</b>
                        </p>
                    </div>
                    <div className={classes['podcast-description']}>
                        <i>WITH AMYANN CADWELL, FOUNDER & CEO OF THE GOOD TRADE</i>
                    </div>
                    <div className={classes['podcast-button']}>
                        <a className={classes['podcast-button-link']} href='#'>SEE EPIDSODE</a>
                    </div>
                </div>
            </div>
            <div className={classes['line-button']}>
                <div className={classes['line']}>
                    <img className={classes['line-img']} src='img/Line-Separator.jpg' alt=''/>
                </div>
                <div className={classes['button']}>
                    <a className={classes['line-button-link']} href='#'>VIEW MORE PODCAST EPIDSODE</a>
                </div>
            </div>
            <div className={classes['orange-circules']}>
                <div className={classes['orange-circules-1']}>
                    <img className={classes['orange-circules-1']} src='img/1.png' alt=''/>
                </div>
                <div className={classes['orange-circules-2']}>
                    <img className={classes['orange-circules-2']} src='img/2.png' alt=''/>
                </div>
                <div className={classes['orange-circules-3']}>
                    <img className={classes['orange-circules-3']} src='img/3.png' alt=''/>
                </div>
            </div>
            <div className={classes['text-box']}>
                <p className={classes['ital-text']}>are you...</p>
                <h3 className={classes['text-questions']}>
                    EXPERIENCING MENTAL ROADBLOCKS WHEN YOU TRY TO GET CREATIVE?
                </h3>
                <h3 className={classes['text-questions']}>  
                    CONSTANTLY REACTING TO THE DEMANDS SURROUNDING YOU?    
                </h3>
                <h3 className={classes['text-questions']}>
                    CREATING MOSTLY IN ISOLATION?                     
                </h3>
                <h3 className={classes['text-questions']}>
                    STUNTED BY PERFECTIONISM?                          
                </h3>
                <h3 className={classes['text-questions']}>
                    CRAVING ACCOUNTABILITY FOR BUILDING A LIFE YOU LOVE?
                </h3>
                <h3 className={classes['text-questions']}>
                    FEELING OUT OF ALIGNMENT WITH YOUR WORK?        
                </h3>
                <h3 className={classes['text-questions']}>
                     BURNT OUT FROM “HUSTLE” CULTURE?
                </h3>
            </div>
            <div className={classes['conf-img-welcome']}>
                <div className={classes['conf-img']}>
                    <img className={classes['conf-img']} src='img/Image-Conf.jpg' alt=''/>
                </div>
                <div className={classes['img-welcome']}>
                    <img className={classes['img-welcome']} src='img/welcome-image.png'/>
                </div>
                <div>
                    <div>
                        <h1 className={classes['description-header']}>we’re changing the way women work together.</h1>
                    </div>
                    <div>
                        <h3 className={classes['description-midlle']}>  WOMEN ARE STUNTED BY PERFECTIONISM FROM CREATING
                                                                     IN ISOLATION. WE PROVIDE
                                                                     <br/> YOU WITH SMALL GROUP SUPPORT, 
                                                                     ACCOUNTABILITY AND COMMUNITY SO THAT YOU CAN
                                                                     <br/> GET OUT OF YOUR HEAD AND INTO CREATING YOUR MOST MEANINGFUL WORK  WITH A 
                                                                     <br/>COMMUNITY OF WOMEN WHO ARE CHEERING YOU ON EVERY STEP OF THE WAY.
                        </h3>
                    </div>
                    <div>
                        <h4 className={classes['description-small']}>
                            <br/>
                           At Yellow Co, we care about who you are as a human being
                           <br/> 
                         AND how you express yourself in the world through your work.
                         <br/>
                         <br/>
                         <br/> 

                        Let’s create your most meaningful work, together.
                        </h4>
                    </div>
                    <div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div></div>
                </div>
            </div>
            
        </div>
    )
}

export default PodcastList