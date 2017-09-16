import objectAssign from 'object-assign';
import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function redPassReducer(state = initialState.redPass, action) {
    switch(action.type) {
        case types.ADD_REDPASS_SUCCESS :
            return state+action.redPass;
        case types.ZERO_REDPASS_SUCCESS :
            return action.redPass;
        default :
            return state;
    }
}
