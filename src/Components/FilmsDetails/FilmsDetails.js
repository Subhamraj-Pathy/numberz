import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';

import ReactPlayer from 'react-player/youtube'

class FilmsDetails extends Component {

    state = {
        urls: [
            {
                name: 'The Phantom Menace',
                url: 'https://www.youtube.com/watch?v=bD7bpG-zDJQ'
            },
            {
                name: 'Attack of the Clones',
                url: 'https://www.youtube.com/watch?v=gYbW1F_c9eM'
            },
            {
                name: 'Revenge of the Sith',
                url: 'https://www.youtube.com/watch?v=5UnjrG_N8hU'
            },
            {
                name: 'A New Hope',
                url: 'https://www.youtube.com/watch?v=1g3_CFmnU7k'
            },
            {
                name: 'The Empire Strikes Back',
                url: 'https://www.youtube.com/watch?v=JNwNXF9Y6kY'
            },
            {
                name: 'Return of the Jedi',
                url: 'https://www.youtube.com/watch?v=5UfA_aKBGMc'
            }
        ],
        film : [], 
        trailerURL: '',
        deviceWidth: window.innerWidth
    }

    async componentDidMount() {
        const params = new URLSearchParams(window.location.search)
        const filmTitle = params.get('film')

        const url = this.state.urls.filter(u => u.name === filmTitle)[0].url

        const response = await axios.get('https://swapi.dev/api/films/')
        const fetchedFilm = response.data.results.filter(p => p.title === filmTitle)
        this.setState({
            film: fetchedFilm[0],
            trailerURL: url
        }) 

    }

    render() {
        return (
            <div className='filmDetailsContainer'>
                <div className='filmHeading'>Star Wars : Chapter {this.state.film.episode_id}</div><br />
                <div className='filmTitle'>{this.state.film.title}</div>
                <div className='flimInfoContainer'>
                    <div className ='filmInfo'> <b>Director:</b> {this.state.film.director}</div>
                    <div className ='filmInfo'> <b>Producer:</b> {this.state.film.producer}</div>
                    <div className ='filmInfo'> <b>Release Date:</b> {this.state.film.release_date}</div>
                </div>
                <ReactPlayer className='videoPlayer' controls={true} url={this.state.trailerURL} width={ this .state.deviceWidth >= 1024 ? '60vw' : '90vw'}  height={ this .state.deviceWidth >= 1024 ? '25vw' : '50vw'}/><br />
                <Link className='detailsLink' to='/films' style={{color: 'yellow'}}><span style={{fontSize: '60px'}}><TrendingFlatIcon className='backIcon' fontSize='inherit' /></span></Link><br />
            </div>
        );
    }
}

export default FilmsDetails;