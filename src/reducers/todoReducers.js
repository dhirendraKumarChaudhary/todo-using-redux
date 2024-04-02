import {ADD_TODO, DELETE_TODO, REMOVE_TODO} from "../actions/index";

// Load initial data from local storage if available
const initialData = {
    list: JSON.parse(localStorage.getItem('todoList')) || []
};


const todoReducers = (state = initialData, action) => {
    switch (action.type) {
        case "ADD_TODO":

            const { id, data } = action.payload;

            const newListAdd = [
                ...state.list,
                {
                    id: id,
                    data: data
                }
            ];

            // Save updated list to local storage
            localStorage.setItem('todoList', JSON.stringify(newListAdd));

            return {
                ...state,
                list: newListAdd
            }

        case "DELETE_TODO":
            const newList = state.list.filter((curElem) => curElem.id !== action.id)

            // Save updated list to local storage
            localStorage.setItem('todoList', JSON.stringify(newList));

            return {
                ...state,
                list: newList
            }

        case "REMOVE_TODO": 
        
        //clear local storage
        localStorage.removeItem('todoList');

        return {
            ...state,
            list: []
        }

        default: return state;
    }
}

export default todoReducers;