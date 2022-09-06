import { combineReducers } from "redux";
import peepReducer from '../store/peeps/Peeps.reducers'

const rootReducer = combineReducers({
    peeps: peepReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;