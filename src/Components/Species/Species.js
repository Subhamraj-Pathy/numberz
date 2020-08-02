import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

import Loading from '../../Assets/loader-gif-3.gif'

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class Species extends Component {

    state = {
        species: [],
        searchParam: '',
        display: []
    }

    async componentDidMount() {
        const response = await axios.get('https://swapi.dev/api/species/')
        this.setState({
            species: response.data.results,
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
                display: this.state.species
            })
        }
        else {
            const match = e.target.value.toLocaleLowerCase()
            const filtered = this.state.species.filter(p => p.name.substring(0, searchParamLength).toLowerCase() === match)
            this.setState({
                display: filtered
            })
        }
    }

    render() {
        return (
            <div className='peopleContainer'>
                {
                    this.state.species.length <= 0 ?
                        <img src={Loading} />
                        :
                        <div>
                            <div className='titleHeading'>Species</div><div className='searchBox'> <input className='searchInput' type='text' placeholder='&#128269; Search' value={this.state.searchParam} onChange={(e) => this.handleSearch(e)} /> </div>
                            
                            <div className='peopleContainer'>
                                {
                                    this.state.display.map((species, i) =>
                                    <Link key={i} className='detailsLink' to={`/detail/species?species=${species.name}`}>
                                        <Card key={i} className='card' style={{height:'180px'}}>
                                            <CardContent className='cardContent'>
                                                <Typography className='cardHeading' variant='h4' component='h1'>
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
                                }
                            </div>
                        </div>
                }
            </div>
        );
    }
}

export default Species;