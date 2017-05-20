import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function gameReducer(state = initialState.gameOn, action) {
    switch(action.type) {
        case types.START_GAME_SUCCESS :
            return true;
        case types.END_GAME_SUCCESS :
            return false;
        default :
            return state;
    }
}
