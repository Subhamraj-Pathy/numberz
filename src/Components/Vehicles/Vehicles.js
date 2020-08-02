import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

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
                        <div>
                            <div className='titleHeading'>Vehicles</div>
                            <div className='peopleContainer'>
                                {
                                    this.state.vehicles.map((vehicle, i) =>
                                    <Link key={i} className='detailsLink' to={`/detail/vehicles?vehicle=${vehicle.name}`}>
                                        <Card className='card' style={{height:'200px'}}>
                                            <CardContent className='cardContent'>
                                                <Typography className='cardHeading' variant='h4' component='h1'>
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
                                    </Link>
                                        
                                    )
                                }
                            </div>
                        </div>
                }
            </div>
        );
    }
}

export default Vehicles;