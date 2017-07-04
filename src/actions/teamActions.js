import * as types from '../constants/actionTypes';

export function switchTeamSuccess() {
    return { type: types.SWITCH_TEAM_SUCCESS};
}

export function switchTeam() {
    return dispatch => {
        dispatch(switchTeamSuccess());
    };
}
