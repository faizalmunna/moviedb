import React, { Component } from "react";
//import {trendingMovies} from '../../src/actions'
import { connect } from "react-redux";
import "./MovieList.scss";
class Trending extends Component {
  render() {
    console.log(this.props.trending);
    return (
      <div className="trending_component">
        <div className="movie_card_wrapper">{console.log(this.props.trending)}</div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  trending: state.trending
});
export default connect(mapStateToProps)(Trending);
