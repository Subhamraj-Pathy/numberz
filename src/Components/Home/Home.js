import React, {useState, useEffect} from 'react';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const Home = () => {

    const [index, setIndex] = useState(0)
    const [insiderArray] = useState([
        'Unlike the previous Star Wars films, which were shot both on soundstages and on location, Star Wars: Episode III - Revenge of the Sith was filmed entirely in the studio. The only location work was a background plate shot during the production of Episode II.',
        'Having Han Solo frozen in carbonite was (at least in part) due to the fact that they were not sure that Harrison Ford would return for a third film. When the original Star Wars was made, Carrie Fisher and Mark Hammill were signed for a three picture deal, but Ford refused.',
        "There is no mystical significance in the color of Mace Windu's lightsaber. Samuel L. Jackson, after a joking conversation with stunt coordinator Nick Gillard, asked Lucas if he could have a purple lightsaber and Lucas agreed. In an interview on UK TV, Jackson said he 'thought it would be cool'.",
        "Gary Oldman had agreed to be the voice of General Grievous, but pulled out of the film because it was being made using actors who were not part of the Screen Actor's Guild, of which Oldman was a member.",
        "At one point, Lucas planned for the character of Luke Skywalker, along with his aunt and uncle, to be midgets. According to some sources, Leia's line when Luke rescues her ('Aren't you a little short for a stormtrooper?') is a remnant of this story idea.",
        "The growls and sounds of the Rancor in Jabba's Palace were actually remixed from an audio recording of an aggressive dachshund.",
        "The Death Troopers served as Director Krennic's bodyguards. They wore black suits of body-armor and specialized helmets with vocal scramblers.",
        "Episode II: Attack of the Clones is the first Star Wars film in which Yoda (Frank Oz) is entirely computer-generated. Oz was only required on the set to help the actors by providing the voice of Yoda." 
    ])

    const handleBack = () => {
        if(index > 0) {
            setIndex(index-1)
        }
    }

    const handleFont = () => {
        if(index < 7) {
            setIndex(index+1)
        }
    }

    return (
        <div className='homeScreenContainer'>
            <p>Star Wars Insider</p>
            <div className='insiderText'>
                {insiderArray[index]}
            </div>
            <div className='arrowHandlers'>
                <span style={ index === 0 ? {color: 'grey'} : {color: 'blue', cursor: 'pointer'}} onClick={handleBack}><ArrowBackIosIcon fontSize='large' color='inherit' /></span>
                <span style={ index === 7 ? {color: 'grey'} : {color: 'blue', cursor: 'pointer'}} onClick={handleFont}><ArrowForwardIosIcon fontSize='large' color='inherit' /></span>
            </div>
        </div>
    );
};

export default Home;