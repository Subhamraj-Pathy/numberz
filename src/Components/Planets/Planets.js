import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

import Loading from '../../Assets/loader-gif-3.gif'

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class Planets extends Component {
    
    state = {
        planets: [],
        searchParam: '',
        display: []
    }

    async componentDidMount() {
        const response = await axios.get('https://swapi.dev/api/planets/')
        this.setState({
            planets: response.data.results,
            display: response.data.results
        })
    }

    handleSearch = (e) => {
        const searchParamLength = e.target.value.length

        this.setState({
            searchParam: e.target.value
        })
        
        if(searchParamLength <= 0) {
            this.setState({
                display: this.state.planets
            })
        }
        else {
            const match = e.target.value.toLocaleLowerCase()
            const filtered = this.state.planets.filter(p => p.name.substring(0, searchParamLength).toLowerCase() === match)
            this.setState({
                display: filtered
            })
        }
    }

    render() {
        return (
            <div className='peopleContainer'>
                {
                    this.state.planets.length <= 0 ?
                        <img src={Loading} />
                        :
                        <div>
                            <div className='titleHeading'>Planets</div>
                            <div className='searchBox'> <input className='searchInput' type='text' placeholder='Search' value={this.state.searchParam} onChange={(e) => this.handleSearch(e)} /> </div>
                            <div className='peopleContainer'>
                                {
                                    this.state.display.map((planet, i) =>
                                    <Link key={i} className='detailsLink' to={`/detail/planet?planet=${planet.name}`}>
                                        <Card className='card' style={{height:'200px'}}>
                                            <CardContent className='cardContent'>
                                                <Typography className='cardHeading' variant='h4' component='h1'>
                                                    {planet.name}
                                        </Typography>
                                                <div className='cardContentRowAlign'>
                                                    <Typography className='typography'><b>Climate:</b> {planet.climate}</Typography>
                                                    <Typography className='typography'><b>Diameter:</b> {planet.diameter}</Typography>
                                                </div>
                                                <div className='cardContentRowAlign'>
                                                    <Typography className='typography'><b>Rotation Period:</b> {planet.rotation_period}</Typography>
                                                    <Typography className='typography'><b>Orbital Period:</b> {planet.orbital_period}</Typography>
                                                </div>
                                                <div className='cardContentRowAlign'>
                                                    <Typography className='typography'><b>Population:</b> {planet.population}</Typography>
        
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

export default Planets;