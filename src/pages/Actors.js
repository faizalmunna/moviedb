
import React, { Component } from "react";
import { getActors } from "../../src/actions";
import { connect } from "react-redux";
import SingleActor from '../components/singleActor'
class Actors extends Component {

  componentDidMount() {
    this.props.getActors("");
  }
  render() {
    return (
      <div className="body_component">  
        <div className="movie_card_wrapper">
            {console.log(this.props.actors.results)}
          {this.props.actors.results && this.props.actors.results.map(({id , ...otherprops})=> 
          <SingleActor  key={id} id={id} {...otherprops} />
          )} 
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
    actors:state.search.actors
});
export default connect(mapStateToProps, { getActors})(Actors);
