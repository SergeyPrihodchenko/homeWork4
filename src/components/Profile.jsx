import store from '../store';
import {useCallback, useState} from 'react';
import { changeVisible } from '../store/profile/actions';

export default function Profile() {
    const {showName, name} = store.getState();
    const dispatch = store.dispatch;
    const [, setDummy] = useState();

    const SetShowName = useCallback(() => {
        dispatch(changeVisible);
        setDummy('');
    }, [dispatch]);
    

    return(
        <div className="">
            <h1>Profile</h1>
            <button onClick={SetShowName}>Show Name</button>
            <blockquote>
               {showName && <h3>{name}</h3>}
            </blockquote>
        </div>
    );
}