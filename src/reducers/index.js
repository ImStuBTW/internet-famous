import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import test from './testReducer';
import game from './gameReducer';
import round from './roundReducer';
import pause from './pauseReducer';
import team from './teamReducer';
import redScore from './redScoreReducer';
import blueScore from './blueScoreReducer';
import phase from './phaseReducer';
import timer from './timerReducer';
import deck from './deckReducer';
import remainingCards from './remainingCardsReducer';
import instructions from './instructionsReducer';
import redTempScore from './redTempScoreReducer';
import redCard from './redCardReducer';
import redPass from './redPassReducer';
import blueTempScore from './blueTempScoreReducer';
import blueCard from './blueCardReducer';
import bluePass from './bluePassReducer';

const rootReducer = combineReducers({
    routing: routerReducer,
    testValue: test,
    gameOn: game,
    inRound: round,
    isPaused: pause,
    redTeam: team,
    redScore: redScore,
    blueScore: blueScore,
    phase: phase,
    timerValue: timer,
    deck: deck,
    remainingCards: remainingCards,
    instructions: instructions,
    redTempScore: redTempScore,
    redCard: redCard,
    redPass: redPass,
    blueTempScore: blueTempScore,
    blueCard: blueCard,
    bluePass: bluePass
});

export default rootReducer;
