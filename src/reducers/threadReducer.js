import {
    GET_THREAD,
    GET_THREADS,
    GET_THREAD_INFO
} from '../actions/actionTypes'

const initialState = {
    allThreads: [],
    currThread: null,
    threadInfo: null
}

export default (state = initialState, action) => {
    switch(action.type){
        case GET_THREAD:
            return{
                ...state,
                currThread: action.payload
            }
        case GET_THREADS:
            return{
                ...state,
                allThreads: action.payload
            }
        case GET_THREAD_INFO:
            return{
                ...state,
                threadInfo: action.payload
            }
        default:
            return state;
    }
};