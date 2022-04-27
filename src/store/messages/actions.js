export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';

export const ADD_MESSAGE_WITH_SAGA = 'MESSAGES::ADD_MESSAGE_WITH_SAGA';

export const addMessages = (chatID, message) => ({
    type: ADD_MESSAGE,
    payload: {chatID, message}
});
export const addMessagesWithSaga = (chatID, message) => ({
    type: ADD_MESSAGE_WITH_SAGA,
    payload: {chatID, message}
});