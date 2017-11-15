import objectAssign from 'object-assign';
import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function remainingCardsReducer(state = initialState.remainingCards, action) {
    switch(action.type) {
        case types.INIT :
            return ['a1','a2','a3', 'a4'];
        case types.LOAD_CARDS_SUCCESS :
            return action.remainingCards;
        case types.LOAD_AND_SHUFFLE_CARDS_SUCCESS :
            return action.remainingCards;
        case types.SHIFT_CARDS_SUCCESS :
            // Slice(1) returns the array without the first element. concate(state[0]) adds the first element to the end.
            return state.slice(1).concat(state[0]);
        case types.SCORE_CARDS_SUCCESS :
            // Slice(1) returns the array without the first element. concate(state[0]) adds the first element to the end.
            return state.slice(1);
        default :
            return state;
    }
}
