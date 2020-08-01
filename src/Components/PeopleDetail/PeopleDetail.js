import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

import LukeSkywalker from '../../Assets/People/Luke Skywalker-min.jpg'
import Beru from '../../Assets/People/Beru Whitesun lars-min.jpg'
import Biggs from '../../Assets/People/Biggs Darklighter-min.jpg'
import C3PO from '../../Assets/People/C-3PO-min.jpg'
import DarthVader from '../../Assets/People/Darth Vader-min.jpg'
import Leia from '../../Assets/People/Leia Organa-min.jpg'
import ObiWan from '../../Assets/People/Obi-Wan Kenobi-min.jpg'
import Owen from '../../Assets/People/Owen Lars-min.jpg'
import R2D2 from '../../Assets/People/R2-D2-min.jpg'
import R5D4 from '../../Assets/People/R5-D4-min.jpg'

class PeopleDetail extends Component {

    state = {
        images: [
            {
                name: 'Luke Skywalker',
                img: LukeSkywalker
            },
            {
                name: 'C-3PO',
                img: C3PO
            },
            {
                name: 'R2-D2',
                img: R2D2
            },
            {
                name: 'Darth Vader',
                img: DarthVader
            },
            {
                name: 'Leia Organa',
                img: Leia
            },
            {
                name: 'Owen Lars',
                img: Owen
            },
            {
                name: 'Beru Whitesun lars',
                img: Beru
            },
            {
                name: 'R5-D4',
                img: R5D4
            },
            {
                name: 'Biggs Darklighter',
                img: Biggs
            },
            {
                name: 'Obi-Wan Kenobi',
                img: ObiWan
            }
        ],
        person: [],
        imageURL: '',
        homeWorld: '',
        films: [],
        vehicles: [],
        starships: []
    }

    async componentDidMount() {
        const params = new URLSearchParams(window.location.search)
        const person = params.get('person')

        const response = await axios.get('https://swapi.dev/api/people/')
        const fetchedPerson = response.data.results.filter(p => p.name === person)
        this.setState({
            person: fetchedPerson[0]
        })
        this.setState({
            imageURL: this.state.images.filter(image => image.name === this.state.person.name)[0].img,
            homeWorld: (await axios.get(this.state.person.homeworld)).data.name
        })
    }



    render() {
        return (
            <div className='personDetails'>
                <img className='displayImage' src={this.state.imageURL} />

                {
                    this.state.person.length <= 0 ? null :
                        <div className='displayDetails'>
                            <div className='displayDetailsName'>{this.state.person.name}</div>
                            <div className='displayDetailsContents'><span style={{ textShadow: '.5px .5px yellow', fontSize: '25px' }}>Character Birth Year:</span> {this.state.person.birth_year}</div>
                            <div className='displayDetailsContents'><span style={{ textShadow: '.5px .5px yellow', fontSize: '25px' }}>Character Height:</span> {this.state.person.height}</div>
                            <div className='displayDetailsContents'><span style={{ textShadow: '.5px .5px yellow', fontSize: '25px' }}>Character Mass:</span> {this.state.person.mass}</div>
                            <div className='displayDetailsContents'><span style={{ textShadow: '.5px .5px yellow', fontSize: '25px' }}>Character Hair Color:</span> {this.state.person.hair_color}</div>
                            <div className='displayDetailsContents'><span style={{ textShadow: '.5px .5px yellow', fontSize: '25px' }}>Character Skin Color:</span> {this.state.person.skin_color}</div>
                            <div className='displayDetailsContents'><span style={{ textShadow: '.5px .5px yellow', fontSize: '25px' }}>Character Eye Color:</span> {this.state.person.eye_color}</div>
                            <div className='displayDetailsContents'><span style={{ textShadow: '.5px .5px yellow', fontSize: '25px' }}>Character Home World:</span> {this.state.homeWorld}</div>
                            <div className='displayDetailsContents'><span style={{ textShadow: '.5px .5px yellow', fontSize: '25px' }}>Film Appearances :</span> {this.state.person.films.length}</div>
                            <div className='displayDetailsContents'><span style={{ textShadow: '.5px .5px yellow', fontSize: '25px' }}>Vehicles Operated :</span> {this.state.person.vehicles.length}</div>
                            <div className='displayDetailsContents'><span style={{ textShadow: '.5px .5px yellow', fontSize: '25px' }}>Startships Operated :</span> {this.state.person.starships.length}</div>
                        </div>
                }

                <Link className='detailsLink' to='/people' style={{color: 'white', fontSize: '20px', fontWeight: 'bold'}}>Back</Link>
            </div>
        );
    }
}

export default PeopleDetail;