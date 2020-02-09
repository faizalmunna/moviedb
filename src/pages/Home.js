import React, { Component } from "react";
import MovieList from "../../src/components/MovieList";

class Home extends Component {
  render() {
    return (
      <div className="App">
        <MovieList />
      </div>
    );
  }
}

export default Home;
