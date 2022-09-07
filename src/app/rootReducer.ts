import { combineReducers } from "redux";
import peepReducer from '../store/peeps/Peeps.reducers'

const rootReducer = combineReducers({
    peeps: peepReducer
});

// Infer the RootState type from the store itself. Exctract it so it can be referenced as needed. 
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;