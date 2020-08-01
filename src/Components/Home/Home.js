import React, {useState, useEffect} from 'react';
import HomeLoader from '../../Assets/loader gif 2.gif'

const Home = () => {

    const [text, setText] = useState('')
    const [textArray, setTextArray] = useState([
        'May The Force Be With You',
        'Your Focus Determines Your Reality',
        'Do. Or Do Not. There Is No Try',
        "There's Always A Bigger Fish",
        'Size Matters Not',
        'Wars Not Make One Great',
        'May The Force Be With You',
        'Your Focus Determines Your Reality',
        'Do. Or Do Not. There Is No Try',
        "There's Always A Bigger Fish"
    ])

    useEffect(() => {
        const index = Math.floor(Math.random() * 10)
        setText(textArray[index])
    })

    return (
        <div className='homeScreenContainer'>
            <img src={HomeLoader} />
    <       p>{text}</p>
        </div>
    );
};

export default Home;