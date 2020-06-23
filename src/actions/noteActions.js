import {
  GET_NOTES,
  SET_LOADING,
  NOTES_ERROR,
  ADD_NOTE,
  DELETE_NOTE,
  SEARCH_NOTES
} from "./types";

export const addNote = (note) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch("/notes", {
      method: "POST",
      body: JSON.stringify(note),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    dispatch({
      type: ADD_NOTE,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NOTES_ERROR,
      payload: error.response.data,
    });
  }
};

export const getNotes = () => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch("/notes");
    const data = await res.json();

    dispatch({
      type: GET_NOTES,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NOTES_ERROR,
      payload: error.response.data,
    });
  }
};

export const deleteNote = (id) => async (dispatch) => {
  try {
    setLoading();

    await fetch(`/notes/${id}`, {
      method: "DELETE",
    });

    dispatch({
      type: DELETE_NOTE,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: NOTES_ERROR,
      payload: error.response.data,
    });
  }
};

export const searchNotes = (text) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch(`/notes?q=${text}`);
    const data = await res.json();

    dispatch({
      type: SEARCH_NOTES,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NOTES_ERROR,
      payload: error.response.data,
    });
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
