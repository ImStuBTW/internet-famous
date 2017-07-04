import objectAssign from 'object-assign';
import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function cardReducer(state = initialState.card, action) {
    switch(action.type) {
        case types.NEXT_CARD_SUCCESS :
            return action.card;
        default :
            return state;
    }
}
