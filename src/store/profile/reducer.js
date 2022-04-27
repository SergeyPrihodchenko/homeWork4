
import { USER_NAME } from "./actions";


const initialState = '';


const profileReducer = (state = initialState, action) => {

    switch(action.type) {
       
        case USER_NAME: 
        return {
            ...state,
            name: action.payload
        }
        default:
            return state;
    }
}

export default profileReducer;