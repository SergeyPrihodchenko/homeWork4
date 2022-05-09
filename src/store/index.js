import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import chatReducer from "./chats/reducer";
import messagesReducer from "./messages/reducer";
import profileReducer from "./profile/reducer";
import createSagaMiddleware from 'redux-saga';
import mySaga from "./saga";
import {persistStore, persistReducer} from 'redux-persist';
import storage from "redux-persist/lib/storage";
import gistsReducer from "./gists/reducer";
import thunk from "redux-thunk";

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
    profile: profileReducer,
    chat: chatReducer,
    messages: messagesReducer,
    gists: gistsReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persisConfig = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer(persisConfig, reducers);

export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
    );

export const persistor = persistStore(store);

export default persistor;