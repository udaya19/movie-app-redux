import { data } from "../data";
import NavBar from "./NavBar";
import MovieCard from "./MovieCard";
import React, { Component } from "react";
import { addMovies, setShowFavourites } from "../actions";
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
  onChangeTab = (val) => {
    this.props.store.dispatch(setShowFavourites(val));
  };
  render() {
    const { list, favourites, showFavourites } = this.props.store.getState();
    const displayMovies = showFavourites ? favourites : list;
    const store = this.props.store;
    return (
      <div className="App">
        <NavBar />
        <div className="main">
          <div>
            <div
              className={`tab ${showFavourites ? "" : "active-tabs"}`}
              onClick={() => {
                this.onChangeTab(false);
              }}
            >
              Movies
            </div>
            <div
              className={`tab ${showFavourites ? "active-tabs" : ""}`}
              onClick={() => {
                this.onChangeTab(true);
              }}
            >
              Favourites
            </div>
          </div>
          <div className="list">
            {displayMovies.map((movie, index) => (
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
