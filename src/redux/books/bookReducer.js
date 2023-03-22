import { ADDED, LOADED } from "./actionTypes";

const initialState = {
    books: []
}

const bookReducer = (state= initialState, action) => {
    switch (action.type) {
        case LOADED:
            return {
                
                books: [...action.payload]
           }
            
            
        case ADDED:
            return {
                ...state,
                books: [...state.books, action.payload ]
            }
       
    
       default:
        return state
    }
}

export default bookReducer;