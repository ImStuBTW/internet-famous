import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import test from './testReducer';
import game from './gameReducer';
import round from './roundReducer';
import pause from './pauseReducer';
import team from './teamReducer';

const rootReducer = combineReducers({
    routing: routerReducer,
    testValue: test,
    gameOn: game,
    inRound: round,
    isPaused: pause,
    currentTeam: team,
    redScore: team,
    blueScore: team
});

export default rootReducer;
