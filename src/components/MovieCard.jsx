import React, { Component } from "react";
import { addFavourite } from "../actions";
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

  render() {
    const { movie, isFavourite } = this.props;
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
            {isFavourite ? (
              <button className="favourite-btn">Unfavourite</button>
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
