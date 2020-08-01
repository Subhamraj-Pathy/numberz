import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

import Alderaan from '../../Assets/Planets/Alderaan-min.jpg'
import Bespin from '../../Assets/Planets/Bespin-min.jpg'
import Coruscant from '../../Assets/Planets/Coruscant-min.jpg'
import Dagobah from '../../Assets/Planets/Dagobah-min.jpeg'
import Endor from '../../Assets/Planets/Endor-min.png'
import Hoth from '../../Assets/Planets/Hoth-min.jpg'
import Kamino from '../../Assets/Planets/Kamino-min.jpeg'
import Naboo from '../../Assets/Planets/Naboo-min.jpg'
import Tatooine from '../../Assets/Planets/Tatooine-min.jpeg'
import Yavin from '../../Assets/Planets/Yavin IV-min.jpg'


class PlanetDetail extends Component {

    state = {
        images: [
            {
                name: 'Tatooine',
                img: Tatooine
            },
            {
                name: 'Alderaan',
                img: Alderaan
            },
            {
                name: 'Yavin IV',
                img: Yavin
            },
            {
                name: 'Hoth',
                img: Hoth
            },
            {
                name: 'Dagobah',
                img: Dagobah
            },
            {
                name: 'Bespin',
                img: Bespin
            },
            {
                name: 'Endor',
                img: Endor
            },
            {
                name: 'Naboo',
                img: Naboo
            },
            {
                name: 'Coruscant',
                img: Coruscant
            },
            {
                name: 'Kamino',
                img: Kamino
            }
        ],
        planet: [],
        imageURL: ''
    }

    async componentDidMount() {
        const params = new URLSearchParams(window.location.search)
        const planet = params.get('planet')

        const response = await axios.get('https://swapi.dev/api/planets/')
        const fetchedPlanet = response.data.results.filter(p => p.name === planet)
        this.setState({
            planet: fetchedPlanet[0]
        })
        this.setState({
            imageURL: this.state.images.filter(image => image.name === this.state.planet.name)[0].img
        })
    }



    render() {
        return (
            <div className='personDetails'>
                <img className='displayImage' src={this.state.imageURL} />

                {
                    this.state.planet.length <= 0 ? null :
                        <div className='displayDetails'>
                            <div className='displayDetailsName'>{this.state.planet.name}</div>
                            <div className='displayDetailsContents'><span style={{ textShadow: '.5px .5px yellow', fontSize: '25px' }}>Planet's Rotation Period:</span> {this.state.planet.rotation_period}</div>
                            <div className='displayDetailsContents'><span style={{ textShadow: '.5px .5px yellow', fontSize: '25px' }}>Planet's Orbital Period:</span> {this.state.planet.orbital_period}</div>
                            <div className='displayDetailsContents'><span style={{ textShadow: '.5px .5px yellow', fontSize: '25px' }}>Planet's Diameter:</span> {this.state.planet.diameter}</div>
                            <div className='displayDetailsContents'><span style={{ textShadow: '.5px .5px yellow', fontSize: '25px' }}>Planet's Climate:</span> {this.state.planet.climate}</div>
                            <div className='displayDetailsContents'><span style={{ textShadow: '.5px .5px yellow', fontSize: '25px' }}>Planet's Gravity:</span> {this.state.planet.gravity}</div>
                            <div className='displayDetailsContents'><span style={{ textShadow: '.5px .5px yellow', fontSize: '25px' }}>Terrain:</span> {this.state.planet.terrain}</div>
                            <div className='displayDetailsContents'><span style={{ textShadow: '.5px .5px yellow', fontSize: '25px' }}>Surface Water:</span> {this.state.planet.surface_water}</div>
                            <div className='displayDetailsContents'><span style={{ textShadow: '.5px .5px yellow', fontSize: '25px' }}>Planet's Population:</span> {this.state.planet.population}</div>
                            <div className='displayDetailsContents'><span style={{ textShadow: '.5px .5px yellow', fontSize: '25px' }}>Film Appearances :</span> {this.state.planet.films.length}</div>
                        </div>
                }

                <Link className='detailsLink' to='/planets' style={{color: 'white', fontSize: '20px', fontWeight: 'bold'}}>Back</Link>
            </div>
        );
    }
}

export default PlanetDetail;