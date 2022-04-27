import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import chatReducer from "./chats/reducer";
import messagesReducer from "./messages/reducer";
import profileReducer from "./profile/reducer";
import createSagaMiddleware from 'redux-saga';
import mySaga from "./saga";
import {persistStore, persistReducer} from 'redux-persist';
import storage from "redux-persist/lib/storage";

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
    profile: profileReducer,
    chat: chatReducer,
    messages: messagesReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persisConfig = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer(persisConfig, reducers);

export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
    );

export const persistor = persistStore(store);

sagaMiddleware.run(mySaga);