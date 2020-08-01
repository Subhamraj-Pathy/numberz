import React, { Component } from 'react';
import axios from 'axios'

import Loading from '../../Assets/loader-gif-3.gif'

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class Vehicles extends Component {

    state = {
        vehicles: []
    }

    async componentDidMount() {
        const response = await axios.get('https://swapi.dev/api/vehicles/')
        this.setState({
            vehicles: response.data.results
        })
    }

    render() {
        return (
            <div className='peopleContainer'>
                {
                    this.state.vehicles.length <= 0 ?
                        <img src={Loading} />
                        :
                        (
                            this.state.vehicles.map((vehicle, i) =>
                                <Card key={i} className='cardVehicle'>
                                    <CardContent className='cardContent'>
                                        <Typography style={{ textAlign: 'center', marginBottom: '20px', textShadow: '1px 1px orangered', cursor: 'pointer' }} variant='h4' component='h1'>
                                            {vehicle.name}
                                        </Typography>
                                        <div className='cardContentRowAlign'>
                                            <Typography className='typography'><b>Model:</b> {vehicle.model}</Typography>
                                        </div>
                                        <div className='cardContentRowAlign'>
                                            <Typography className='typography'><b>Manufacturer:</b> {vehicle.manufacturer}</Typography>
                                        </div>
                                        <div className='cardContentRowAlign'>
                                            <Typography className='typography'><b>Cost:</b> {vehicle.cost_in_credits}</Typography>
                                        </div>
                                    </CardContent>
                                </Card>
                            )
                        )
                }
            </div>
        );
    }
}

export default Vehicles;