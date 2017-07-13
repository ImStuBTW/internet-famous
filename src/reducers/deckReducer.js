import objectAssign from 'object-assign';
import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function deckReducer(state = initialState.deck, action) {
    switch(action.type) {
        case types.RANDOM_DECK_SUCCESS :
            return action.deck;
        case types.SHIFT_DECK_SUCCESS :
            return state.slice(1).concat(state[0]);
        default :
            return state;
    }
}
