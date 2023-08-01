import { configureStore } from "@reduxjs/toolkit";
import NotesReducer from "./noteSlice";

const store = configureStore({
    reducer: {
        notes: NotesReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store