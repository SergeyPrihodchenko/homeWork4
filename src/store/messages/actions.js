export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';

export const addMessages = (chatID, message) => ({
    type: ADD_MESSAGE,
    payload: {chatID, message}
});