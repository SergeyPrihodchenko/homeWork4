
import { TOGGLE_NAME } from "./actions"

const initialState = {
    background: 'black',
    color: 'white'
};

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_NAME: 
        return {
            ...state,
            background: state.background === 'black' ? state.background = 'white' : state.background = 'black',
            color: state.color === 'white' ? state.color = 'black' : state.color = 'white'

        };
        default:
            return state;
    }
}

export default profileReducer;