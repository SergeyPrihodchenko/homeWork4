import { useReducer } from "react";
import { chatListUpdate } from "../store/chats/actions";
import { initialState } from "../store/chats/reducer";

describe('profileReducer test', () => {
    it('returns test job', ()=> {
        const newName = useReducer(initialState, chatListUpdate('new Name')); 

        expect(newName).toMatchSnapshot();
    });
});
