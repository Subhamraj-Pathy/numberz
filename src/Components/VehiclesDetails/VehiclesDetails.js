import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

import ATAT from '../../Assets/Vehicles/AT-AT.webp'
import ATST from '../../Assets/Vehicles/AT-ST.webp'
import Sail from '../../Assets/Vehicles/Sail barge-min.jpeg'
import Sand from '../../Assets/Vehicles/Sand Crawler-min.png'
import Snow from '../../Assets/Vehicles/Snowspeeder-min.png'
import Storm from '../../Assets/Vehicles/Storm IV Twin-Pod cloud car-min.jpg'
import T16 from '../../Assets/Vehicles/T-16-min.png'
import TIEB from '../../Assets/Vehicles/TIE bomber.webp'
import TIELN from '../../Assets/Vehicles/TIE-LN-min.jpg'
import X34 from "../../Assets/Vehicles/X-34-min.jpeg"


class VehiclesDetails extends Component {

    state = {
        images: [
            {
                name: 'Sand Crawler',
                img: Sand
            },
            {
                name: 'T-16 skyhopper',
                img: T16
            },
            {
                name: 'X-34 landspeeder',
                img: X34
            },
            {
                name: 'TIE/LN starfighter',
                img: TIELN
            },
            {
                name: 'Snowspeeder',
                img: Snow
            },
            {
                name: "TIE bomber",
                img: TIEB
            },
            {
                name: 'AT-AT',
                img: ATAT
            },
            {
                name: 'AT-ST',
                img: ATST
            },
            {
                name: 'Storm IV Twin-Pod cloud car',
                img: Storm
            },
            {
                name: 'Sail barge',
                img: Sail
            }
        ],
        vehicle: [],
        imageURL: ''
    }

    async componentDidMount() {
        const params = new URLSearchParams(window.location.search)
        const vehicle = params.get('vehicle')

        const response = await axios.get('https://swapi.dev/api/vehicles/')
        const fetchedVehicle = response.data.results.filter(p => p.name === vehicle)
        this.setState({
            vehicle: fetchedVehicle[0]
        })
        this.setState({
            imageURL: this.state.images.filter(image => image.name === this.state.vehicle.name)[0].img
        })
    }



    render() {
        return (
            <div className='personDetails'>
                <img className='displayImage' src={this.state.imageURL} />

                {
                    this.state.vehicle.length <= 0 ? null :
                        <div className='displayDetails'>
                            <div className='displayDetailsName'>{this.state.vehicle.name}</div>
                            <div className='displayDetailsContents'><span style={{ textShadow: '.5px .5px yellow', fontSize: '25px' }}>Model:</span> {this.state.vehicle.model}</div>
                            <div className='displayDetailsContents'><span style={{ textShadow: '.5px .5px yellow', fontSize: '25px' }}>Class:</span> {this.state.vehicle.vehicle_class}</div>
                            <div className='displayDetailsContents'><span style={{ textShadow: '.5px .5px yellow', fontSize: '25px' }}>Manufacturer:</span> {this.state.vehicle.manufacturer}</div>
                            <div className='displayDetailsContents'><span style={{ textShadow: '.5px .5px yellow', fontSize: '25px' }}>Cost:</span> {this.state.vehicle.cost_in_credits}</div>
                            <div className='displayDetailsContents'><span style={{ textShadow: '.5px .5px yellow', fontSize: '25px' }}>Length:</span> {this.state.vehicle.length}</div>
                            <div className='displayDetailsContents'><span style={{ textShadow: '.5px .5px yellow', fontSize: '25px' }}>Maximum Speed:</span> {this.state.vehicle.max_atmosphering_speed}</div>
                            <div className='displayDetailsContents'><span style={{ textShadow: '.5px .5px yellow', fontSize: '25px' }}>Crew:</span> {this.state.vehicle.crew}</div>
                            <div className='displayDetailsContents'><span style={{ textShadow: '.5px .5px yellow', fontSize: '25px' }}>Passengers:</span> {this.state.vehicle.passengers}</div>
                            <div className='displayDetailsContents'><span style={{ textShadow: '.5px .5px yellow', fontSize: '25px' }}>Cargo Capacity:</span> {this.state.vehicle.cargo_capacity}</div>
                            <div className='displayDetailsContents'><span style={{ textShadow: '.5px .5px yellow', fontSize: '25px' }}>Film Appearances :</span> {this.state.vehicle.films.length}</div>
                        </div>
                }

                <Link className='detailsLink' to='/vehicles' style={{color: 'white', fontSize: '20px', fontWeight: 'bold'}}>Back</Link>
            </div>
        );
    }
}

export default VehiclesDetails;