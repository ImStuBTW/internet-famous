import * as types from '../constants/actionTypes';

export function addScoreSuccess(value) {
    return { type: types.ADD_SCORE_SUCCESS, redScore: value, blueScore: value };
}

export function switchTeamSuccess() {
    return { type: types.SWITCH_TEAM_SUCCESS};
}


export function addScore() {
    return dispatch => {
        dispatch(addScoreSuccess(1));
    };
}

export function switchTeam() {
    return dispatch => {
        dispatch(switchTeamSuccess());
    };
}
