import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import middleware from "../middelwares/middlewaer";
import chatReducer from "./cahts/reducer";
import messagesReducer from "./messages/reducer";
import profileReducer from "./profile/reducer";

const reducers = combineReducers({
    profile: profileReducer,
    chat: chatReducer,
    messages: messagesReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;
const store = createStore(reducers,
    composeEnhancer(applyMiddleware(middleware))
    );

export default store;
