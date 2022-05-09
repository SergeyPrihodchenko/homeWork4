import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { CircularProgress } from '@mui/material';
import { selectGists, selectGistsError, selectGistsLoading } from "../store/gists/selectors";
import { getAllGists } from "../store/gists/action";


export default function Gists() {

    const dispatch = useDispatch();

    const gists = useSelector(selectGists);
    const loading = useSelector(selectGistsLoading);
    const error = useSelector(selectGistsError);


    const requestsGists = async () => {
        dispatch(getAllGists())
    }; 

    useEffect( () => {
        requestsGists();
    },[]);

    const renderGist = useCallback(
        (gist) => <li key={gist.id}>{gist.description || 'NO DESCRIPTION'}</li>,
        []
    )

        if(loading) {
          return  <CircularProgress />
        }

        if(error) {
            return (
                <>
                <h3>Error</h3>
                <button onClick={requestsGists}>Retry</button>
                </>
            );
        }

        return <ul>{gists.map(renderGist)}</ul>
}