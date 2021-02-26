import * as types from "./types/actions-types";
import {AppAction} from "./types/interfaces";

export const fetchNews = (dispatch: any, step: number, feed: string) => {
    loadingNews(true)
    return fetch(`https://api.hnpwa.com/v0/${feed}/${step}.json`)
        .then((response) => response.json())
        .then((data: []) => {
            dispatch(setNews(data))
        })
        .catch((error) => {
            dispatch(fetchFailed(error.message));
        });
};

const loadingNews = (stage: boolean): AppAction => ({
    type: types.LOADING_NEWS,
    payload: stage,
});

const fetchFailed = (errMess: string): AppAction => ({
    type: types.FETCH_FAILED,
    payload: errMess,
});

const setNews = (images: []): AppAction => ({
    type: types.SET_NEWS,
    payload: images,
});

export const sortNews = (dispatch: any, type: string) => {
    dispatch({
        type: types.SORT_NEWS,
        payload: type,
    });
}

export const SelectFeed = (dispatch: any, type: string) => {
    dispatch({
        type: types.SELECT_FEED,
        payload: type,
    });
}
