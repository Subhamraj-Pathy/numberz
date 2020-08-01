import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

import CR90 from '../../Assets/Starships/cr90 corvette-min.jpg'
import Death from '../../Assets/Starships/death star-min.jpeg'
import Exe from '../../Assets/Starships/executor-min.png'
import Falcon from '../../Assets/Starships/millennium falcon-min.jpg'
import Rebel from '../../Assets/Starships/rebel transport-min.jpg'
import Class from '../../Assets/Starships/sentinel-class landing craft-min.png'
import Star from '../../Assets/Starships/star destroyer-min.png'
import Tie from '../../Assets/Starships/tie advanced x1-min.jpg'
import X from '../../Assets/Starships/x-wing-min.jpeg'
import Y from "../../Assets/Starships/y-wing-min.jpeg"


class StarshipsDetails extends Component {

    state = {
        images: [
            {
                name: 'CR90 corvette',
                img: CR90
            },
            {
                name: 'Star Destroyer',
                img: Star
            },
            {
                name: 'Sentinel-class landing craft',
                img: Class
            },
            {
                name: 'Death Star',
                img: Death
            },
            {
                name: 'Millenium Falcon',
                img: Falcon
            },
            {
                name: "Y-wing",
                img: Y
            },
            {
                name: 'X-wing',
                img: X
            },
            {
                name: 'TIE Advanced x1',
                img: Tie
            },
            {
                name: 'Executor',
                img: Exe
            },
            {
                name: 'Rebel transport',
                img: Rebel
            }
        ],
        starship: [],
        imageURL: ''
    }

    async componentDidMount() {
        const params = new URLSearchParams(window.location.search)
        const star = params.get('starship')

        const response = await axios.get('https://swapi.dev/api/starships/')
        const fetchedVehicle = response.data.results.filter(p => p.name === star)
        this.setState({
            starship: fetchedVehicle[0]
        })
        this.setState({
            imageURL: this.state.images.filter(image => image.name === this.state.starship.name)[0].img
        })
    }



    render() {
        return (
            <div className='personDetails'>
                <img className='displayImage' src={this.state.imageURL} />

                {
                    this.state.starship.length <= 0 ? null :
                        <div className='displayDetails'>
                            <div className='displayDetailsName'>{this.state.starship.name}</div>
                            <div className='displayDetailsContents'><span style={{ textShadow: '.5px .5px yellow', fontSize: '25px' }}>Model:</span> {this.state.starship.model}</div>
                            <div className='displayDetailsContents'><span style={{ textShadow: '.5px .5px yellow', fontSize: '25px' }}>Class:</span> {this.state.starship.starship_class}</div>
                            <div className='displayDetailsContents'><span style={{ textShadow: '.5px .5px yellow', fontSize: '25px' }}>Manufacturer:</span> {this.state.starship.manufacturer}</div>
                            <div className='displayDetailsContents'><span style={{ textShadow: '.5px .5px yellow', fontSize: '25px' }}>Cost:</span> {this.state.starship.cost_in_credits}</div>
                            <div className='displayDetailsContents'><span style={{ textShadow: '.5px .5px yellow', fontSize: '25px' }}>Length:</span> {this.state.starship.length}</div>
                            <div className='displayDetailsContents'><span style={{ textShadow: '.5px .5px yellow', fontSize: '25px' }}>Maximum Speed:</span> {this.state.starship.max_atmosphering_speed}</div>
                            <div className='displayDetailsContents'><span style={{ textShadow: '.5px .5px yellow', fontSize: '25px' }}>Hyperdrive Rating:</span> {this.state.starship.hyperdrive_rating}</div>
                            <div className='displayDetailsContents'><span style={{ textShadow: '.5px .5px yellow', fontSize: '25px' }}>Crew:</span> {this.state.starship.crew}</div>
                            <div className='displayDetailsContents'><span style={{ textShadow: '.5px .5px yellow', fontSize: '25px' }}>Passengers:</span> {this.state.starship.passengers}</div>
                            <div className='displayDetailsContents'><span style={{ textShadow: '.5px .5px yellow', fontSize: '25px' }}>Cargo Capacity:</span> {this.state.starship.cargo_capacity}</div>
                            <div className='displayDetailsContents'><span style={{ textShadow: '.5px .5px yellow', fontSize: '25px' }}>Film Appearances :</span> {this.state.starship.films.length}</div>
                        </div>
                }

                <Link className='detailsLink' to='/starships' style={{color: 'white', fontSize: '20px', fontWeight: 'bold'}}>Back</Link>
            </div>
        );
    }
}

export default StarshipsDetails;