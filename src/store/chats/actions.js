export const ADD_CHAT = 'CHAT::ADD_CHAT';
export const CHATS_UPDATE = 'CHAT::CHATS_UPDATE';


export const addChat =(name) => ({

    type: ADD_CHAT,
    payload: name
    
});

export const chatListUpdate = (chats) => ({
    type: CHATS_UPDATE,
    chats
});