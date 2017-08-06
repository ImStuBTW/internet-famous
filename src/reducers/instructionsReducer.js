import objectAssign from 'object-assign';
import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function instructionsReducer(state = initialState.instructions, action) {
    switch(action.type) {
        case types.INSTRUCTIONS_DELIVERED_SUCCESS :
            return action.instructions;
        case types.INSTRUCTIONS_CLEARED_SUCCESS :
            return action.instructions;
        default :
            return state;
    }
}
