
import { GET_NEWS, DELETE_NEWS, ADD_NEWS, NEWS_LOADING } from '../actions/types'


const initialState = {
    news: [],
    loading: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_NEWS:
            return {
                ...state,
                news: action.payload,
                loading: false

            }
        case DELETE_NEWS:
            return {
                ...state,
                news: state.news.filter(blog => blog._id !== action.payload)
            }

        case ADD_NEWS:
            return {
                ...state,
                //action.payload is the new news that comes in
                news: [action.payload, ...state.news]
            }
        case NEWS_LOADING:
            return {
                ...state,
                loading: true
            };

        default:
            return state;
    }
}