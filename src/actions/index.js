export const ADD_MOVIES = "ADD_MOVIES"; //action types

//action creators
export function addMovies(movies) {
  return {
    type: ADD_MOVIES,
    movies,
  };
}
