import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

import Loading from '../../Assets/loader-gif-3.gif'

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class Species extends Component {

    state = {
        species: []
    }

    async componentDidMount() {
        const response = await axios.get('https://swapi.dev/api/species/')
        this.setState({
            species: response.data.results
        })
    }

    render() {
        return (
            <div className='peopleContainer'>
                {
                    this.state.species.length <= 0 ?
                        <img src={Loading} />
                        :
                        (
                            this.state.species.map((species, i) =>
                            <Link key={i} className='detailsLink' to={`/detail/species?species=${species.name}`}>
                                <Card key={i} className='cardSpecies'>
                                    <CardContent className='cardContent'>
                                        <Typography style={{ textAlign: 'center', marginBottom: '20px', textShadow: '1px 1px orangered', cursor: 'pointer' }} variant='h4' component='h1'>
                                            {species.name}
                                        </Typography>
                                        <div className='cardContentRowAlign'>
                                            <Typography className='typography'><b>Classification:</b> {species.classification}</Typography>
                                        </div>
                                        <div className='cardContentRowAlign'>
                                            <Typography className='typography'><b>LifeSpan:</b> {species.average_lifespan}</Typography>
                                        </div>
                                        <div className='cardContentRowAlign'>
                                            <Typography className='typography'><b>Language:</b> {species.language}</Typography>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                                
                            )
                        )
                }
            </div>
        );
    }
}

export default Species;