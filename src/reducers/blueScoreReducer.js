import objectAssign from 'object-assign';
import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function blueReducer(state = initialState.blueScore, action) {
    switch(action.type) {
        case types.ADD_BLUE_SUCCESS :
            return state+action.blueScore;
        default :
            return state;
    }
}
