import {combineReducers} from 'redux';
import placeReducer from './placeReducer';
import placeDataReducer from './placedataReducer';

const rootReducer= combineReducers({
    place: placeReducer,
    placeData: placeDataReducer,
});

export default rootReducer;