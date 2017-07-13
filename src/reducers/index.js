import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import test from './testReducer';
import game from './gameReducer';
import round from './roundReducer';
import pause from './pauseReducer';
import team from './teamReducer';
import redScore from './redScoreReducer';
import blueScore from './blueScoreReducer';
import card from './cardReducer';
import phase from './phaseReducer';
import timer from './timerReducer';
import deck from './deckReducer';

const rootReducer = combineReducers({
    routing: routerReducer,
    testValue: test,
    gameOn: game,
    inRound: round,
    isPaused: pause,
    redTeam: team,
    redScore: redScore,
    blueScore: blueScore,
    card: card,
    phase: phase,
    timerValue: timer,
    deck: deck
});

export default rootReducer;
