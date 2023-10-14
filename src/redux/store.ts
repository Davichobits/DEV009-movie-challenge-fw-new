import { configureStore } from "@reduxjs/toolkit";

import authReducer from './slices/auth';
import userReducer from './slices/user'
import genreReducer from './slices/genre'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    genre: genreReducer
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;