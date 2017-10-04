import objectAssign from 'object-assign';
import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function deckReducer(state = initialState.deck, action) {
    switch(action.type) {
        case types.INIT :
            return ['a1', 'a2', 'a3', 'a4'];
        case types.RANDOM_DECK_SUCCESS :
            return action.deck;
        default :
            return state;
    }
}
