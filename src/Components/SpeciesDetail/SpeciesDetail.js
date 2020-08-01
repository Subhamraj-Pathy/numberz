import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

import Droid from '../../Assets/Species/Droid-min.png'
import Ewok from '../../Assets/Species/Ewok-min.jpg'
import Human from '../../Assets/Species/Human.jfif'
import Hutt from '../../Assets/Species/Hutt.jfif'
import Mon from '../../Assets/Species/Mon Calamari-min.jpg'
import Rodian from '../../Assets/Species/Rodian.webp'
import Sullu from '../../Assets/Species/Sullustan-min.jpeg'
import Trandoshan from '../../Assets/Species/Trandoshan-min.jpeg'
import Wookie from '../../Assets/Species/Wookie-min.jpg'
import Yoda from "../../Assets/Species/Yoda's species-min.jpg"


class SpeciesDetail extends Component {

    state = {
        images: [
            {
                name: 'Human',
                img: Human
            },
            {
                name: 'Droid',
                img: Droid
            },
            {
                name: 'Wookie',
                img: Wookie
            },
            {
                name: 'Rodian',
                img: Rodian
            },
            {
                name: 'Hutt',
                img: Hutt
            },
            {
                name: "Yoda's species",
                img: Yoda
            },
            {
                name: 'Trandoshan',
                img: Trandoshan
            },
            {
                name: 'Mon Calamari',
                img: Mon
            },
            {
                name: 'Ewok',
                img: Ewok
            },
            {
                name: 'Sullustan',
                img: Sullu
            }
        ],
        species: [],
        imageURL: ''
    }

    async componentDidMount() {
        const params = new URLSearchParams(window.location.search)
        const species = params.get('species')

        const response = await axios.get('https://swapi.dev/api/species/')
        const fetchedSpecies = response.data.results.filter(p => p.name === species)
        this.setState({
            species: fetchedSpecies[0]
        })
        this.setState({
            imageURL: this.state.images.filter(image => image.name === this.state.species.name)[0].img
        })
    }



    render() {
        return (
            <div className='personDetails'>
                <img className='displayImage' src={this.state.imageURL} />

                {
                    this.state.species.length <= 0 ? null :
                        <div className='displayDetails'>
                            <div className='displayDetailsName'>{this.state.species.name}</div>
                            <div className='displayDetailsContents'><span style={{ textShadow: '.5px .5px yellow', fontSize: '25px' }}>Classification:</span> {this.state.species.classification}</div>
                            <div className='displayDetailsContents'><span style={{ textShadow: '.5px .5px yellow', fontSize: '25px' }}>Designation:</span> {this.state.species.designation}</div>
                            <div className='displayDetailsContents'><span style={{ textShadow: '.5px .5px yellow', fontSize: '25px' }}>Average Height:</span> {this.state.species.average_height}</div>
                            <div className='displayDetailsContents'><span style={{ textShadow: '.5px .5px yellow', fontSize: '25px' }}>Skin Color:</span> {this.state.species.skin_colors}</div>
                            <div className='displayDetailsContents'><span style={{ textShadow: '.5px .5px yellow', fontSize: '25px' }}>Hair Color:</span> {this.state.species.hair_colors}</div>
                            <div className='displayDetailsContents'><span style={{ textShadow: '.5px .5px yellow', fontSize: '25px' }}>Eye Color:</span> {this.state.species.eye_colors}</div>
                            <div className='displayDetailsContents'><span style={{ textShadow: '.5px .5px yellow', fontSize: '25px' }}>Average Lifespan:</span> {this.state.species.average_lifespan}</div>
                            <div className='displayDetailsContents'><span style={{ textShadow: '.5px .5px yellow', fontSize: '25px' }}>Language:</span> {this.state.species.language}</div>
                            <div className='displayDetailsContents'><span style={{ textShadow: '.5px .5px yellow', fontSize: '25px' }}>Film Appearances :</span> {this.state.species.films.length}</div>
                        </div>
                }

                <Link className='detailsLink' to='/species' style={{color: 'white', fontSize: '20px', fontWeight: 'bold'}}>Back</Link>
            </div>
        );
    }
}

export default SpeciesDetail;