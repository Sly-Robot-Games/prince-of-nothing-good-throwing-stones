import { configureStore } from '@reduxjs/toolkit';
import { stonesReducer } from './state/stones-state';

export const store = configureStore({
  reducer: {
    stones: stonesReducer,
  }
});
