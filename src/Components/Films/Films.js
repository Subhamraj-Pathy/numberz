import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

import Loading from '../../Assets/loader-gif-3.gif'

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class Films extends Component {

    state = {
        films: []
    }

    async componentDidMount() {
        const response = await axios.get('https://swapi.dev/api/films/')
        this.setState({
            films: response.data.results.sort((a,b) => a.episode_id - b.episode_id )
        })
    }

    render() {
        return (
            <div className='peopleContainer'>
                {
                    this.state.films.length <= 0 ?
                        <img src={Loading} />
                        :
                        <div>
                            <div className='titleHeading'>Films</div>
                            <div className='peopleContainer'>
                                {
                                    this.state.films.map((film, i) =>
                                    <Link key={i} className='detailsLink' to={`/detail/films?film=${film.title}`}>
                                        <Card key={i} className='cardFilm' style={{height:'430px'}}>
                                        <CardContent className='cardContent'>
                                            <Typography className='cardHeading' variant='h4' component='h1'>
                                                {film.title}
                                            </Typography><br />
                                            <div className='cardContentRowAlign'>
                                                <Typography className='typography'><b>Episode:</b> {film.episode_id}</Typography>
                                            </div>
                                            <div className='cardContentRowAlign'>
                                                <Typography className='typography' style={{textAlign: 'justify  '}}>{film.opening_crawl}</Typography>
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

export default Films;