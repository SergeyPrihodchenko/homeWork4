import { API_URL_PUBLIC } from "../../constantas/url";

export const GET_GISTS_REQUEST = 'GISTS::GET_GISTS_REQUEST';
export const GET_GISTS_SUCCESS = 'GISTS::GET_GISTS_SUCCESS';
export const GET_GISTS_FAILURE = 'GISTS::GET_GISTS_FAILURE';

export const getGistsRequest = () => ({
    type: GET_GISTS_REQUEST
});

export const getGistsSuccess = (gists) => ({
    type: GET_GISTS_SUCCESS,
    payload: gists
});


export const getGistsFailure = (error) => ({
    type: GET_GISTS_FAILURE,
    payload: error
});

export const getAllGists = () => async (dispatch) => {
    dispatch(getGistsRequest());

    try {
        const res = await fetch(API_URL_PUBLIC);
        if(!res.ok) {
            throw new Error('Request error');
        } 
        
        const result = await res.json();

        dispatch(getGistsSuccess(result));
    }
    catch(err) {
        dispatch(getGistsFailure(err.message));
        console.error(err);
    }
};