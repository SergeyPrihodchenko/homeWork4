import {delay, put, takeLatest} from 'redux-saga/effects';
import { addMessages, ADD_MESSAGE_WITH_SAGA } from './messages/actions';

function* onAddMessageWithSaga(action) {
    yield put(addMessages(action.payload.chatID, action.payload.message))
    if (action.payload.message.name !== 'BOT') {
        const botMessage = {name: 'BOT', message:'hello , my name BOT'};
        yield delay(2000);
        yield put(addMessages(action.payload.chatID, botMessage))
    }
}

function* mySaga() {
    yield takeLatest(ADD_MESSAGE_WITH_SAGA, onAddMessageWithSaga);
}

export default mySaga;