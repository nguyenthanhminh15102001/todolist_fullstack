export const ADD_TODO =  "ADD_TODO";
export const DELETE_TODO =  "DELETE_TODO";

export const EDIT_TODO =  "EDIT_TODO";

export const DELETE_ALL =  "DELETE_ALL";


const addtodo =  (payload) =>{
    return {
        type: ADD_TODO,
        payload
    }
}
const delete_all =  (payload) =>{
    return {
        type: DELETE_ALL,
    }
}