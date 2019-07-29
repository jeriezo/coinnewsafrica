import { combineReducers } from 'redux';
import newsReducer from './newsReducer';
import errorReducer from './errorReducer.js';
import authReducer from './authReducer';


export default combineReducers({
    //all reducers go here
    news: newsReducer,
    error: errorReducer,
    auth: authReducer
});