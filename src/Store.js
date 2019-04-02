import {createStore, combineReducers} from 'redux';
import MoviesReducer from './reducers/moviesReducer';
//  import StarsFilterReducer from './reducers/starsFilterReducer'
// import TitleFilterReducer from './reducers/titleFilterReducer'

// const root = combineReducers({
//     movies: MoviesReducer,
//     minRatingFilter: StarsFilterReducer
//     // titleFilter: TitleFilterReducer
// })

const store = createStore(MoviesReducer,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)




export default store