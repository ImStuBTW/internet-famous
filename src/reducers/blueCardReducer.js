import objectAssign from 'object-assign';
import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function blueCardReducer(state = initialState.blueCard, action) {
    switch(action.type) {
        case types.ADD_BLUECARD_SUCCESS :
            return state+action.blueCard;
        case types.ZERO_BLUECARD_SUCCESS :
            return action.blueCard;
        default :
            return state;
    }
}
