import { ADDED, LOADED } from "./actionTypes"

export const added = (formData) => {
    return{
        type: ADDED,
        payload: formData ,
    }
}

export const loaded = (books) => {
    return{
        type: LOADED,
        payload: books,
    }
}