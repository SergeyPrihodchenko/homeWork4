import { ADD_MESSAGE, addMessages, updateMessages } from "../store/messages/actions";
import {getDatabase, ref, push, onValue, set, remove} from 'firebase/database';
import firebaseConfigHooc from "../services/firebaseConfig";
import { chatListUpdate } from "../store/chats/actions";
const middleware =  (store) => (next) => (action) => {
    
    if(action.type === ADD_MESSAGE && action.payload.message.name !== 'BOT') {
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

export const initTrackerWithFB = () => async (dispatch) => {
    const db = getDatabase(firebaseConfigHooc);
    const chatRef = ref(db, '/chats');
    onValue(chatRef, (snapshot) => {
        const data = snapshot.val();
        const chatIds = Object.keys(data);
        const chatArr = chatIds.map((item) => ({
            id: item, 
            name: data[item].name
        }));
        dispatch(chatListUpdate(chatArr));
    }); 
};

export const addChatWithFB = (name) => async () => {
    const db = getDatabase(firebaseConfigHooc);
    const chatRef = ref(db, '/chats');
    const newChatRef = push(chatRef);
    set(newChatRef, {name: name}).then((res) => {
        console.log('chat add', res);
    });
};

export const deletChatWithFB = (id) => async () => {
    const db = getDatabase(firebaseConfigHooc);
    const chatRef = ref(db, `/chats/${id}`);
    const messagesRef = ref(db, `/messages/${id}`);
    remove(chatRef).then((res) => {
        console.log('Chat Removed', res);
    });
    remove(messagesRef).then((res) => {
        console.log('Messages deleted', res);
    });
};

export const addMessageWithFB = (chatId, message) => async () => {
    const db = getDatabase(firebaseConfigHooc);
    const messageRef = ref(db, `/messages/${chatId}`);
    const newMessageRef = push(messageRef);
    set(newMessageRef, message).then((res) => {
        console.log('message add', res);
    })
}

export const getMessgagesByChatIdWithFB = (chatId) => async (dispatch) => {
    const db = getDatabase(firebaseConfigHooc);
    const msgRef = ref(db, `messages/${chatId}`);
    onValue(msgRef, (snapshot) => { 
        const data = snapshot.val();
        const msg = data && Object.values(data);
        if(msg?.length > 0) {
            dispatch(updateMessages(chatId, msg));
        };
    });
};

export default middleware;