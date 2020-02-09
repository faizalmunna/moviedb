import React, { Component } from "react";
import { connect } from "react-redux";
import {fetchMovie} from '../actions'
import './Details.scss'
class MovieDetails extends Component {
    componentDidMount(){
        this.props.fetchMovie(this.props.match.params.id);
    }
    render() {
        const {title, poster_path, overview, tagline ,release_date,vote_average,vote_count,genres, production_companies, production_countries} = this.props.movies
        return (
            <div className='container'>
                <h2 className="movie_card_title">{title}</h2>   
                <div className='movie_details'>     
                    <div className='col_single'>
                        <span>
                            <img
                            className="search_image img-fluid"
                            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                            alt=""
                            />
                        </span>
                    </div>
                    <div className='col_single'>
                        <span><h5>{tagline}</h5></span>
                        <span>{overview}</span> 
                        <span><h6>release  date</h6> {release_date}</span> 
                        <span><h6>vote average</h6> {vote_average}</span>
                        <span><h6>vote count</h6>  {vote_count}</span>
                        <div>
                            <h6>Genres</h6>
                            { genres && genres.map(m=>(<div key={m.name}>{ m.name}</div>
                        ))}
                        </div>
                        <div>
                            <h6>Production Companies</h6>
                            { production_companies && production_companies.map(m=>(<div key={m.name}>{ m.name}</div>
                        ))}
                        </div>
                        <div>
                            <h6>Production Countries</h6>
                            { production_countries && production_countries.map(m=>(<div key={m.name}>{ m.name}</div>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}
const mapStateToProps = state => ({
  movies: state.trending.movieDetails
});
export default connect(mapStateToProps, { fetchMovie})(MovieDetails);
