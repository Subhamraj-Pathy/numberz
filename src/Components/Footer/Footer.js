import React from 'react';
import logo from '../../Assets/logo.png'

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

const Footer = () => {
    return (
        <div className='footer'>
            <img style={{width: '150px', marginTop: '10px'}} src={logo} />
            <h2 className='footerTitle'>May The Force Be With You</h2>
            <div className='footerIcons'>
                <a href='https://www.facebook.com/StarWars' target='_blank' className='footerIconLinks'><FacebookIcon color='inherit' fontSize='inherit' /></a>
                <a href='https://www.instagram.com/starwars/' target='_blank' className='footerIconLinks'><InstagramIcon color='inherit' fontSize='inherit' /></a>
                <a href='https://twitter.com/starwars' target='_blank' className='footerIconLinks'><TwitterIcon color='inherit' fontSize='inherit' /></a>
                <a href='https://www.youtube.com/user/starwars' target='_blank' className='footerIconLinks'><YouTubeIcon color='inherit' fontSize='inherit' /></a>
            </div>
            <div className='signature'>Made By <a className='signatureLink' href='https://subhamrajpathy.netlify.app/' target='_blank'>Subhamraj Pathy</a></div>
        </div>
    );
};

export default Footer;