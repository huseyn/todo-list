import {
    GET_NOTES,
    SET_LOADING,
    NOTES_ERROR,
    ADD_NOTE,
    DELETE_NOTE
} from '../actions/types';

const initialState = {
    notes: null,
    current: null,
    loading: false,
    error: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_NOTES:
            return {
                ...state,
                notes: action.payload,
                loading: false
            }
        case ADD_NOTE: 
        return {
            ...state,
            notes: [...state.notes, action.payload],
            loading:false
        }
        case DELETE_NOTE: 
        return {
            ...state,
            notes: state.notes.filter(note=> note.id!==action.payload),
            loading: false
        }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        case NOTES_ERROR:
            console.error(action.payload);
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}