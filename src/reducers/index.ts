import { combineReducers } from "redux";
import Board from './Board';

export const rootReducer = combineReducers({
    Board,
});

export type rootState = ReturnType<typeof rootReducer>
