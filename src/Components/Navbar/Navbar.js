import React, {useState} from 'react';
import logo from '../../Assets/logo.png'


import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

const Navbar = () => {
    const [showMenuIcon, setShowMenuIcon] = useState(false)
    return (
        <div className='navBarContainer'>
            <img className='logo' src={logo} />
            <div className='navLinks'>
                <Button color="inherit"><span className='BtnText'>People</span></Button>
                <Button color="inherit"><span className='BtnText'>Planets</span></Button>
                <Button color="inherit"><span className='BtnText'>Films</span></Button>
                <Button color="inherit"><span className='BtnText'>Species</span></Button>
                <Button color="inherit"><span className='BtnText'>Vehicles</span></Button>
                <Button color="inherit"><span className='BtnText'>Starships</span></Button>
            </div>
            <div className='menu'><MenuIcon fontSize='large' color='error' onClick={() => setShowMenuIcon(!showMenuIcon)} /></div>
            <div id="mySidenav" class="sidenav" style={ !showMenuIcon ? {width: '0px'} : {width: '250px'}  }>
                <div className='menuClose'><CloseIcon fontSize='large' color='error' onClick={() => setShowMenuIcon(!showMenuIcon)} /></div>
                <Button color="inherit"><span className='BtnText'>People</span></Button>
                <Button color="inherit"><span className='BtnText'>Planets</span></Button>
                <Button color="inherit"><span className='BtnText'>Films</span></Button>
                <Button color="inherit"><span className='BtnText'>Species</span></Button>
                <Button color="inherit"><span className='BtnText'>Vehicles</span></Button>
                <Button color="inherit"><span className='BtnText'>Starships</span></Button>
            </div>
        </div>
    );
};

export default Navbar;