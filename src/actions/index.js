import axios from "axios"
const apikey = "e1d0ed2f09aee761ddab2e211181612e"

export const searchMovie = text => dispatch => {
  dispatch({
    type: "SEARCH_MOVIE",
    payload: text
  })
}
export const getMovies = (text = "") => dispatch => {
  const hasInput = !!text.trim();
  const url = hasInput
    ? `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${text}`
    : `https://api.themoviedb.org/3/trending/all/day?api_key=${apikey}`
  axios.get(url).then(d => {
    dispatch({ type: "GET_MOVIE", payload: d.data.results })
  }).catch(err => console.log(err))
}
export const fetchMovie = id => dispatch => {
  axios
    .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apikey}`)
    .then(response =>
      dispatch({
        type: "FETCH_MOVIE",
        payload: response.data
      })
    )
    .catch(err => console.log(err))
}
export const getActors = () => dispatch => {
  const url = `https://api.themoviedb.org/3/person/popular?api_key=${apikey}`
  axios.get(url).then(d => {
    dispatch({ type: "GET_ACTORS", payload: d.data })
  })
}
export const fetchPerson = id => dispatch => {
  axios
    .get(`https://api.themoviedb.org/3/person/${id}?api_key=${apikey}`)
    .then(response =>
      dispatch({
        type: "FETCH_ACTOR",
        payload: response.data
      })
    )
    .catch(err => console.log(err))
}