import objectAssign from 'object-assign';
import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function teamReducer(state = initialState, action) {
    switch(action.type) {
        case types.ADD_SCORE_SUCCESS :
            if(state.currentTeam === 'Red') {
                //return state+action.redScore;
                return objectAssign({}, ...state, {redScore: action.redScore})
            }
            else {
                //return state+action.blueScore;
                break;
            }
        case types.SWITCH_TEAM_SUCCESS :
            if(state.currentTeam === 'Red') {
                return objectAssign({}, ...state, {currentTeam: 'Blue'});
            }
            else {
                return objectAssign({}, ...state, {currentTeam: 'Red'});
            }
        default :
            return state;
    }
}
