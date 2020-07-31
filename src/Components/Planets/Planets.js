import React, { Component } from 'react';
import axios from 'axios'

import Loading from '../../Assets/loader-gif-3.gif'

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class Planets extends Component {
    
    state = {
        planets: []
    }

    async componentDidMount() {
        const response = await axios.get('https://swapi.dev/api/planets/')
        this.setState({
            planets: response.data.results
        })
    }

    render() {
        return (
            <div className='peopleContainer'>
                {
                    this.state.planets.length <= 0 ?
                        <img src={Loading} />
                        :
                        (
                            this.state.planets.map((planet, i) =>
                                <Card key={i} className='cardPlanet'>
                                    <CardContent className='cardContent'>
                                        <Typography style={{ textAlign: 'center', marginBottom: '20px', textShadow: '1px 1px orangered', cursor: 'pointer' }} variant='h4' component='h1'>
                                            {planet.name}
                                </Typography>
                                        <div className='cardContentRowAlign'>
                                            <Typography className='typography'><b>Climate:</b> {planet.climate}</Typography>
                                            <Typography className='typography'><b>Diameter:</b> {planet.diameter}</Typography>
                                        </div>
                                        <div className='cardContentRowAlign'>
                                            <Typography className='typography'><b>Rotation Periodr:</b> {planet.rotation_period}</Typography>
                                            <Typography className='typography'><b>Orbital Period:</b> {planet.orbital_period}</Typography>
                                        </div>
                                        <div className='cardContentRowAlign'>
                                            <Typography className='typography'><b>Gravity:</b> {planet.gravity}</Typography>
                                        </div>
                                        <div className='cardContentRowAlign'>
                                            <Typography className='typography'><b>Terrain:</b> {planet.terrain}</Typography>
                                        </div>
                                        <div className='cardContentRowAlign'>
                                            <Typography className='typography'><b>Population:</b> {planet.population}</Typography>

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

export default Planets;