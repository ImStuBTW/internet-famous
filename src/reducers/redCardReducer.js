import objectAssign from 'object-assign';
import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function redCardReducer(state = initialState.redCard, action) {
    switch(action.type) {
        case types.INIT :
            return 0;
        case types.ADD_REDCARD_SUCCESS :
            return state+action.redCard;
        case types.ZERO_REDCARD_SUCCESS :
            return action.redCard;
        default :
            return state;
    }
}
