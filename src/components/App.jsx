import { data } from "../data";
import NavBar from "./NavBar";
import MovieCard from "./MovieCard";
import React, { Component } from "react";
import { addMovies } from "../actions";
class App extends Component {
  componentDidMount() {
    const { store } = this.props;
    store.subscribe(() => {
      console.log("Updated");
      this.forceUpdate();
    });
    store.dispatch(addMovies(data));
    console.log("After State", this.props.store.getState());
  }
  isFavouriteMovie = (movie) => {
    const { favourites } = this.props.store.getState();
    const index = favourites.indexOf(movie);
    if (index !== -1) {
      return true;
    }
    return false;
  };
  render() {
    const { list } = this.props.store.getState();
    const store = this.props.store;
    return (
      <div className="App">
        <NavBar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>
          <div className="list">
            {list.map((movie, index) => (
              <MovieCard
                key={`movies-${index}`}
                dispatch={this.props.store.dispatch}
                movie={movie}
                store={store}
                isFavouriteMovie={this.isFavouriteMovie(movie)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
