import objectAssign from 'object-assign';
import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function teamReducer(state = initialState.redTeam, action) {
    switch(action.type) {
        case types.INIT :
            return true;
        case types.SWITCH_TEAM_SUCCESS :
            return !state;
        default :
            return state;
    }
}
