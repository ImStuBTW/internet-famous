import objectAssign from 'object-assign';
import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function testReducer(state = initialState.testValue, action) {
    switch(action.type) {
        case types.ADD_TEST_SUCCESS :
            return state+action.testValue;
        default :
            return state;
    }
}
