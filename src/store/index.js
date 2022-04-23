import { combineReducers, createStore } from "redux";
import chatReducer from "./cahts/reducer";
import messagesReducer from "./messages/reducer";
import profileReducer from "./profile/reducer";

const reducers = combineReducers({
    profile: profileReducer,
    chat: chatReducer,
    messages: messagesReducer
});
const store = createStore(reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
