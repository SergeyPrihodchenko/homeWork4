import { TOGGLE_NAME } from "./actions"

const initialState = {
    showName: true,
    name: 'Sergey'
};

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_NAME: 
        return {
            ...state,
            showName: !state.showName
        };
        default:
            return state;
    }
}

export default profileReducer;