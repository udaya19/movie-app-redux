import { data } from "../data";
import NavBar from "./NavBar";
import MovieCard from "./MovieCard";
import React, { Component } from "react";
class App extends Component {
  componentDidMount() {
    const { store } = this.props;
    store.subscribe(() => {
      console.log("Updated");
      this.forceUpdate();
    });
    store.dispatch({
      type: "ADD_MOVIES",
      movies: data,
    });
    console.log("After State", this.props.store.getState());
  }
  render() {
    const movies = this.props.store.getState();
    return (
      <div className="App">
        <NavBar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>
          <div className="list">
            {movies.map((movie, index) => (
              <MovieCard key={`movies-${index}`} movie={movie} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
