import React, { Component } from "react";
import { searchMovie, getMovies } from "../../src/actions";
import { connect } from "react-redux";
import { Form, Input, Label } from "reactstrap";
import SingleMovie from "./SingleMovie";
import "./MovieList.scss";

class MovieList extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.getMovies(this.props.text);
  };
  handleChange = e => {
    this.props.searchMovie(e.target.value);
    this.props.getMovies(this.props.text);
  };

  componentDidMount() {
    this.props.getMovies("");
  }

  render() {
    const hasInput = !!(this.props.text || "").trim();
    return (
      <div className="body_component">
        <Form className="container-fluid" onSubmit={this.handleSubmit}>
          <Input
            value={this.props.text}
            onChange={this.handleChange}
            placeholder="search by movie name"
          />
        </Form>
        <Label
          style={{
            color: "white",
            paddingLeft: "15px",
            fontSize: "2rem",
            marginTop: "1rem"
          }}
        >
          {hasInput ? `Results for ${this.props.text}` : "Trending Movies"}
        </Label>
        <div className="movie_card_wrapper">
          {this.props.movies.map(({ id, ...otherprops }) => (
            <SingleMovie key={id} id={id} {...otherprops} />
          ))}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  text: state.search.text,
  movies: state.search.movies
});
export default connect(mapStateToProps, { getMovies, searchMovie })(MovieList);
