const initstate = {
    trendingmovies: [],
    movieDetails:[]
}
export default (state = initstate, action) => {
    switch(action.type){
        case "TRENDING_MOVIE":
            return{
                ...state,
                trendingmovies:action.payload
            } 
        case "FETCH_MOVIE":
            return{
                ...state,
                movieDetails:action.payload
        } 
        default: return state    
    }
}