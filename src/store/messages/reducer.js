import { ADD_MESSAGE, UPDATE_MESSAGES } from "./actions";

const inintialState = {
    messageList: []
};

const messagesReducer = (state = inintialState, action) => {


    switch (action.type) {
        case ADD_MESSAGE:
            const {chatID, message} = action.payload;
            const oldMessages = state.messageList[chatID] || [];
            return {

                ...state,
            messageList: {
                ...state.messageList,
                [chatID]: [
                    {
                        ...message,
                        id: `${chatID}${oldMessages.length}`
                    },
                    ...oldMessages,
                ]
            }

            }

            case UPDATE_MESSAGES: 
            console.log(action);
            return {
                ...state,
                messageList: {
                    ...state.messageList,
                    [action.payload.chatId]: action.payload.message
                }
            }
    
        default:
            return state;
    }
}

export default messagesReducer;