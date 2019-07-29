import axios from 'axios';

import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

import { GET_NEWS, ADD_NEWS, DELETE_NEWS, NEWS_LOADING } from './types';

export const getNews = () => dispatch => {
    //since we already set the loading is true  
    dispatch(setNewsLoading());
    axios
        .get('/api/news')
        .then(res =>
            dispatch({
                type: GET_NEWS,
                payload: res.data
            }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const addNews = (news) => dispatch => {
    axios
        .post('/api/news', news)
        .then(res =>
            dispatch({
                type: ADD_NEWS,
                payload: res.data
            }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const deleteNews = (id) => dispatch => {
    axios.delete(`/api/news/${id}`)
        .then(res =>
            dispatch({
                type: DELETE_NEWS,
                payload: id
            })
        ).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};


export const setNewsLoading = () => {
    return {
        type: NEWS_LOADING
    };
};