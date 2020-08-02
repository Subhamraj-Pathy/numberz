import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

import Loading from '../../Assets/loader-gif-3.gif'

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class Starships extends Component {

    state = {
        starships: []
    }

    async componentDidMount() {
        const response = await axios.get('https://swapi.dev/api/starships/')
        this.setState({
            starships: response.data.results
        })
    }

    render() {
        return (
            <div className='peopleContainer'>
                {
                    this.state.starships.length <= 0 ?
                        <img src={Loading} />
                        :
                        <div>
                            <div className='titleHeading'>Starships</div>
                            <div className='peopleContainer'>
                                {
                                    this.state.starships.map((starship, i) =>
                                    <Link key={i} className='detailsLink' to={`/detail/starships?starship=${starship.name}`}>
                                        <Card className='card' style={{height:'250px'}}>
                                            <CardContent className='cardContent'>
                                                <Typography className='cardHeading' variant='h4' component='h1'>
                                                    {starship.name}
                                                </Typography>
                                                <div className='cardContentRowAlign'>
                                                    <Typography className='typography'><b>Model:</b> {starship.model}</Typography>
                                                </div>
                                                <div className='cardContentRowAlign'>
                                                    <Typography className='typography'><b>Manufacturer:</b> {starship.manufacturer}</Typography>
                                                </div>
                                                <div className='cardContentRowAlign'>
                                                    <Typography className='typography'><b>Cost:</b> {starship.cost_in_credits}</Typography>
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

export default Starships;