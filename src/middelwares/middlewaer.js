import { ADD_MESSAGE, addMessages } from "../store/messages/actions";

const middleware =  (store) => (next) => (action) => {
    
    if(action.type === ADD_MESSAGE && action.payload.message.name !== 'BOT') {
        console.log(action);
        const newMessage = {
            message: 'Hello , My name BOT',
            name: 'BOT'
        }
        setTimeout(() => {
            store.dispatch(addMessages(action.payload.chatID, newMessage))
        }, 1500)
    }
    next(action);
};

export default middleware;