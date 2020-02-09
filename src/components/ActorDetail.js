import React, { Component } from "react";
import { connect } from "react-redux";
import {fetchPerson} from '../actions'
import './Details.scss'
class ActorDetail extends Component {
    componentDidMount(){
        this.props.fetchPerson(this.props.match.params.id);
    }
    render() {
        console.log(this.props.actor)
        const {name, biography, profile_path ,known_for_department, also_known_as,place_of_birth, birthday} = this.props.actor
        return (
            <div className='container'>
                <h2 className="movie_card_title">{name}</h2> 
                <div className='movie_details'>
                    <div className='col_single'>
                        <span>
                        <img
                        className="search_image img-fluid"
                        src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                        alt=""
                        />
                        </span>
                    </div> 
                    <div className='col_single'>
                        <span>{biography}</span> 
                        <span><h6>Known for</h6> {known_for_department}</span> 
                        <span><h6>Country</h6> {place_of_birth}</span>
                        <span><h6>Birth Day</h6>  {birthday}</span> 
                        <div>
                        <h6>Also Known As</h6>
                        { also_known_as && also_known_as.map((m)=>(<div key={m}>{m}</div>
                        ))}
                        </div>
                    </div>
                </div>       
            </div>
        );
    };
}
const mapStateToProps = state => ({
  actor: state.search.actorDetails
});
export default connect(mapStateToProps, {fetchPerson})(ActorDetail);
