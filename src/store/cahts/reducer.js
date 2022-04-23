
import { ADD_CHAT } from "./actions";

const initialState = {
    chatList: []
};


const chatReducer = (state = initialState, action) => {

    switch(action.type) {

        case ADD_CHAT: 
        return {

            ...state,

            chatList: [
               { 
                    name: action.payload,
                    id: `ID${state.chatList.length}`,
                },
                ...state.chatList
            ]

        };

        default:
            return state;
    }
}

export default chatReducer;