import classes from './footer.module.css';
import {CgFacebook, CgInstagram} from 'react-icons/cg';
import {FiLink2} from 'react-icons/fi';


function Footer() {
    return(
        <div>
            <div className={classes['footer__menu']}>
                <div className={classes['footer__menu__items']}>
                    <ul>
                        <li className={classes['footer__menu__list']}>
                            <a className={classes['footer__menu__link']}  href='#'>
                                Podcast
                            </a>
                        </li>
                        <li className={classes['footer__menu__list']}>
                            <a className={classes['footer__menu__link']}  href='#'>
                                Blog
                            </a>
                        </li>
                        <li className={classes['footer__menu__list']}>
                            <a className={classes['footer__menu__link']}  href='#'>
                                Events
                            </a>
                        </li>
                        <li className={classes['footer__menu__list']}>
                            <a className={classes['footer__menu__link']}  href='#'>
                                Our Story
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={classes['footer__menu__items']}>
                    <ul>
                        <li className={classes['footer__menu__list']}>
                            <a className={classes['footer__menu__link']}  href='#'>
                                Guidance Groups
                            </a>
                        </li>
                        <li className={classes['footer__menu__list']}>
                            <a className={classes['footer__menu__link']}  href='#'>
                                What We Do
                            </a>
                        </li>
                        <li className={classes['footer__menu__list']}>
                            <a className={classes['footer__menu__link']}  href='#'>
                                Our Impact
                            </a>
                        </li>
                        <li className={classes['footer__menu__list']}>
                            <a className={classes['footer__menu__link']}  href='#'>
                                Our Vision
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={classes['footer__menu__items']}>
                    <ul>
                        <li className={classes['footer__menu__list']}>
                            <a className={classes['footer__menu__link']}  href='#'>
                                Terms & Conditions
                            </a>
                        </li>
                        <li className={classes['footer__menu__list']}>
                            <a className={classes['footer__menu__link']}  href='#'>
                                Privacy Policy
                            </a>
                        </li>
                        <li className={classes['footer__menu__list']}>
                            <a className={classes['footer__menu__link']}  href='#'>
                                Disclaimer
                            </a>
                        </li>
                        <li className={classes['footer__menu__list']}>
                            <a className={classes['footer__menu__link']}  href='#'>
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={classes['footer__img__div']}>
                <img className={classes['footer__img']} src='./img/Line-separator-2.png' alt=''/>
            </div>
            <div className={classes['footer__link__btn']}>
                <div className={classes['footer__book__Link__div']}>
                    <div className={classes['footer__book__Link']}>
                        <a className={classes['book__Link']} href='#'>BOOK OUR FOUNDER, JOANNA WATERFALL TO SPEAK </a>
                        <span  className={classes['footer__book__description']}>AT YOUR NEXT EVENT</span>
                    </div>

                </div>
                <div className={classes['footer__button__div']}>
                    <div className={classes['footer__button']}>
                        <a className={classes['footer__button__link']}>Learn More</a>
                    </div>

                </div>
            </div>
            <div className={classes['footer__icons']}>
                <a className={classes['footer__icons__link']} href='#'><CgInstagram/></a>
                <a className={classes['footer__icons__link']} href='#'><CgFacebook/></a>
                <a className={classes['footer__icons__link']} href='#'><FiLink2/></a>
            </div>
            <div className={classes['footer__link']}>
                <div className={classes['footer__link__block']}>
                    <div className={classes['inst__link__block']}>
                        <a className={classes['inst__link']} href='#'>INSTAGRAM </a>
                        <span className={classes['points']}><b>...</b></span>
                    </div>
                    <div className={classes['inst__link__block']}>
                        <a className={classes['inst__link']} href='#'>FACEBOOK </a>
                        <span className={classes['points']}><b>...</b></span>
                    </div>
                    <div className={classes['inst__link__block']}>
                        <a className={classes['inst__link']} href='#'>LOGIN</a>
                        <span className={classes['points']}><b>...</b></span>
                    </div>
                    <div className={classes['inst__link__block']}>
                        <a className={classes['inst__link']} href='#'>CONTACT</a>
                    </div>
                </div>
                <div className={classes['txt']}>
                    <span className={classes['txt']}>SPREAD GOODNESS AND BLOOM 3 YOU GOT THIS.</span>
                </div>
            </div>
            <div className={classes['copyright']}>
                    <span className={classes['copyright']}>COPYRIGHT YELLOW CO. 2022</span>
            </div>
        </div>
        
        
    )
}

export default Footer