
import { ADD_CHAT, CHATS_UPDATE } from "./actions";

export const initialState = {
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
        case CHATS_UPDATE:
            return { 
                ...state,
                chatList: action.chats
            };    

        default:
            return state;
    }
};



export default chatReducer;