import React, { Component } from "react";
import { addFavourite, removeFromFavourites } from "../actions";
class MovieCard extends Component {
  state = {};
  handleFavouriteClick = () => {
    const { movie } = this.props;
    const { store } = this.props;
    store.subscribe(() => {
      console.log("Added to favourites");
      this.forceUpdate();
    });
    this.props.dispatch(addFavourite(movie));
    console.log("After adding favourties:", store.getState());
  };
  handleUnFavouriteClick = () => {
    const { movie } = this.props;
    const { store } = this.props;
    store.subscribe(() => {
      console.log("Added to favourites");
      this.forceUpdate();
    });
    this.props.dispatch(removeFromFavourites(movie));
    console.log("After removing favourties:", store.getState());
  };
  render() {
    const { movie, isFavouriteMovie } = this.props;
    return (
      <div className="movie-card">
        <div className="left">
          <img src={movie.Poster} alt="movie-poster" />
        </div>
        <div className="right">
          <div className="title">{movie.Title}</div>
          <div className="plot">{movie.Plot}</div>
          <div className="footer">
            <div className="rating">{movie.imdbRating}</div>
            {isFavouriteMovie ? (
              <button
                onClick={this.handleUnFavouriteClick}
                className="unfavourite-btn "
              >
                Unfavourite
              </button>
            ) : (
              <button
                onClick={this.handleFavouriteClick}
                className="favourite-btn"
              >
                Favourite
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
