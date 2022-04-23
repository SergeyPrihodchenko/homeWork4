
import { SWAPPER_THEM, USER_NAME } from "./actions";

const initialState = {
    background: 'white',
    color: 'black',
};



const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case SWAPPER_THEM: 
        return {
            ...state,
            background: state.background === 'white' ? 'black' : 'white',
            color: state.color === 'black' ? 'white' : 'black', 
        };

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