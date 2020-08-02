import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

import Loading from '../../Assets/loader-gif-3.gif'

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class Vehicles extends Component {

    state = {
        vehicles: [],
        searchParam: '',
        display: []
    }

    async componentDidMount() {
        const response = await axios.get('https://swapi.dev/api/vehicles/')
        this.setState({
            vehicles: response.data.results,
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
                display: this.state.vehicles
            })
        }
        else {
            const match = e.target.value.toLocaleLowerCase()
            const filtered = this.state.vehicles.filter(p => p.name.substring(0, searchParamLength).toLowerCase() === match)
            this.setState({
                display: filtered
            })
        }
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
                            <div className='searchBox'> <input className='searchInput' type='text' placeholder='Search' value={this.state.searchParam} onChange={(e) => this.handleSearch(e)} /> </div>
                            
                            <div className='peopleContainer'>
                                {
                                    this.state.display.map((vehicle, i) =>
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