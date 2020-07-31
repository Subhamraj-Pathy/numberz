import React from 'react';
import HomeLoader from '../../Assets/loader gif 2.gif'

const Home = () => {
    return (
        <div className='homeScreenContainer'>
            <img src={HomeLoader} />
            <p>May The Force Be With You</p>
        </div>
    );
};

export default Home;