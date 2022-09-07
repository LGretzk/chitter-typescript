import { configureStore, Action } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import rootReducer, { RootState } from "./rootReducer";

const store = configureStore({
    reducer: rootReducer
});

// Infer the AppDispatch type from the store itself. Exctract it so it can be referenced as needed. 
export type AppDispatch = typeof store.dispatch;

// Not needed, moved to hooks.ts
// export const useAppDispatch = () => useDispatch();

export default store;