import {
    GET_NOTES,
    SET_LOADING,
    NOTES_ERROR
} from './types';

export const getNotes = () => async dispatch => {

    try {
        setLoading();

        const res = await fetch('/notes');
        const data = await res.json();

        dispatch({
            type: GET_NOTES,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: NOTES_ERROR,
            payload: error.response.data
        })
    }
};

export const setLoading = () => {
    return {
        type: SET_LOADING
    };
};