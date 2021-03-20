import * as types from "./types/actions-types";
import {AppAction, Data, Comment} from "./types/interfaces";
import axios from "axios";

export const fetchPersonages = (dispatch: any, step: number) => {
    loadingPersonages(true)
    return axios.get(`https://swapi.dev/api/people/?page=${step}`)
        .then((response) => response.data)
        .then((data: Data) => {
            dispatch(setPersonages(data))
        })
        .catch((error) => {
            dispatch(fetchFailed(error.message));
        });
};

const loadingPersonages = (stage: boolean): AppAction => ({
    type: types.LOADING_PERSONAGES,
    payload: stage,
});

const fetchFailed = (errMess: string): AppAction => ({
    type: types.FETCH_FAILED,
    payload: errMess,
});

const setPersonages = (images: Data): AppAction => ({
    type: types.SET_PERSONAGES,
    payload: images,
});

export const sortPersonages = (type: string, dispatch: any) => {
    dispatch({
        type: types.SORT_PERSONAGES,
        payload: type,
    });
}
export const addComment = (comment: Comment, dispatch: any)=> {
    dispatch({
        type: types.ADD_COMMENT,
        payload: comment,
    });
}

export const deleteComment = (commentId: string, dispatch: any)=> {
    dispatch({
        type: types.DELETE_COMMENT,
        payload: commentId,
    });
}
