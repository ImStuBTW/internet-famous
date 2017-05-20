import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function roundReducer(state = initialState.isPaused, action) {
    switch(action.type) {
        case types.PAUSE_ROUND_SUCCESS :
            return !state;
        default :
            return state;
    }
}
