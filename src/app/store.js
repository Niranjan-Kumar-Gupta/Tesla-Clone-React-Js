import { configureStore } from '@reduxjs/toolkit';
//import counterReducer from '../features/counter/counterSlice';
import  CarReducer from '../features/car/carSlice';

export const store = configureStore({
  reducer: {
    car:CarReducer
  },
});
