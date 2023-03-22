import { combineReducers } from "redux";
import bookReducer from '../redux/books/bookReducer'

 const rootReducer = combineReducers({
    library: bookReducer,
});

export default rootReducer;