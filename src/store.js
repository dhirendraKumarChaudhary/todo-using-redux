import { configureStore } from '@reduxjs/toolkit';
import rootReducers from "./reducers/index"

const store = configureStore({
  reducer: {
    todo: rootReducers
  }
});

export default store;

