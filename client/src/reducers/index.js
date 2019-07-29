import { combineReducers } from 'redux';
import newsReducer from './newsReducer';

export default combineReducers({
    //all reducers go here
    news: newsReducer
});