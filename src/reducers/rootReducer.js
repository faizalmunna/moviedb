import {combineReducers} from 'redux'
import movieListReducer from './movieListReducer'
import SearHreducer from './searchReducer'
export default combineReducers({
    search:SearHreducer,
    trending:movieListReducer
})