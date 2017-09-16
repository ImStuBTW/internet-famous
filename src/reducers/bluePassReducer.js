import objectAssign from 'object-assign';
import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function bluePassReducer(state = initialState.bluePass, action) {
    switch(action.type) {
        case types.ADD_BLUEPASS_SUCCESS :
            return state+action.bluePass;
        case types.ZERO_BLUEPASS_SUCCESS :
            return action.bluePass;
        default :
            return state;
    }
}
