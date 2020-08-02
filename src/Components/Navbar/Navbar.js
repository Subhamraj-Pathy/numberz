import React, {useState} from 'react';
import logo from '../../Assets/logo.png'
import { Link, BrowserRouter as Router } from 'react-router-dom'


import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

const Navbar = () => {
    const [showMenuIcon, setShowMenuIcon] = useState(false)
    return (
            <div className='navBarContainer'>
            <Link to="/"><img className='logo' src={logo} /></Link>
            <div className='navLinks'>
                <Button color="inherit"><span className='BtnText'><Link className='links' to="/films">Films</Link></span></Button>
                <Button color="inherit"><span className='BtnText'><Link className='links' to="/people">People</Link></span></Button>
                <Button color="inherit"><span className='BtnText'><Link className='links' to="/planets">Planets</Link></span></Button>
                <Button color="inherit"><span className='BtnText'><Link className='links' to="/species">Species</Link></span></Button>
                <Button color="inherit"><span className='BtnText'><Link className='links' to="/vehicles">Vehicles</Link></span></Button>
                <Button color="inherit"><span className='BtnText'><Link className='links' to="/starships">Starships</Link></span></Button>
            </div>
            <div className='menu'><MenuIcon fontSize='large' color='error' onClick={() => setShowMenuIcon(!showMenuIcon)} /></div>
            <div id="mySidenav" className="sidenav" style={ !showMenuIcon ? {width: '0px'} : {width: '250px'}  }>
                <div className='menuClose'><CloseIcon fontSize='large' color='error' onClick={() => setShowMenuIcon(!showMenuIcon)} /></div>
                <Button color="inherit"><span className='BtnText'><Link className='links' to="/films" onClick={() => setShowMenuIcon(!showMenuIcon)}>Films</Link></span></Button>
                <Button color="inherit"><span className='BtnText'><Link className='links' to="/people" onClick={() => setShowMenuIcon(!showMenuIcon)}>People</Link></span></Button>
                <Button color="inherit"><span className='BtnText'><Link className='links' to="/planets" onClick={() => setShowMenuIcon(!showMenuIcon)}>Planets</Link></span></Button>
                <Button color="inherit"><span className='BtnText'><Link className='links' to="/species" onClick={() => setShowMenuIcon(!showMenuIcon)}>Species</Link></span></Button>
                <Button color="inherit"><span className='BtnText'><Link className='links' to="/vehicles" onClick={() => setShowMenuIcon(!showMenuIcon)}>Vehicles</Link></span></Button>
                <Button color="inherit"><span className='BtnText'><Link className='links' to="/starships" onClick={() => setShowMenuIcon(!showMenuIcon)}>Starships</Link></span></Button>
            </div>
        </div>
    );
};

export default Navbar;