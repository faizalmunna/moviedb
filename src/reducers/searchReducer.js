const initstate = {
  text: "",
  movies: [],
  movie: [],
  actors:[],
  actorDetails:[]
};

export default (state = initstate, action) => {
  switch (action.type) {
    case "SEARCH_MOVIE":
      return {
        ...state,
        text: action.payload,
        loader: false
      };
    case "GET_MOVIE":
      return {
        ...state,
        movies: action.payload
      };
      case "GET_ACTORS":
      return {
        ...state,
        actors: action.payload
      };
      case "FETCH_ACTOR":
        return {
          ...state,
          actorDetails: action.payload
        };
    default:
      return state;
  }
};
