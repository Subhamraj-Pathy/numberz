import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

import Loading from '../../Assets/loader-gif-3.gif'

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class People extends Component {

    state = {
        people: []
    }

    async componentDidMount() {
        const response = await axios.get('https://swapi.dev/api/people/')
        this.setState({
            people: response.data.results
        })
    }

    render() {
        return (
            <div className='peopleContainer'>
                {
                    this.state.people.length <= 0 ?
                        <img src={Loading} />
                        :
                        <div>
                            <div className='titleHeading'>People</div>
                            <div className='peopleContainer'>
                                {
                                    this.state.people.map((person, i) =>
                                    <Link key={i} className='detailsLink' to={`/detail/person?person=${person.name}`}>
                                        <Card className='card'>
                                            <CardContent className='cardContent'>
                                                <Typography className='cardHeading' variant='h4' component='h1'>
                                                    {person.name}
                                                </Typography>
                                                <div className='cardContentRowAlign'>
                                                    <Typography className='typography'><b>Birth:</b> {person.birth_year}</Typography>
                                                    <Typography className='typography'><b>Gender:</b> {person.gender}</Typography>
                                                </div>
                                                <div className='cardContentRowAlign'>
                                                    <Typography className='typography'><b>Eye Color:</b> {person.eye_color}</Typography>
                                                    <Typography className='typography'><b>Skin Color:</b> {person.skin_color}</Typography>
                                                </div>
                                                <div className='cardContentRowAlign'>
                                                    <Typography className='typography'><b>Hair Color:</b> {person.hair_color}</Typography>
                                                    <Typography className='typography'><b>No. Of. Films:</b> {person.films.length}</Typography>
                                                </div>
                                                <div className='cardContentRowAlign'>
                                                    <Typography className='typography'><b>Mass:</b> {person.mass}</Typography>
                                                    <Typography className='typography'><b>Height:</b> {person.height}</Typography>
    
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

export default People;