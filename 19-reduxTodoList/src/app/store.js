import { configureStore } from '@reduxjs/toolkit';
import todReducer from '../features/todoSlice'

export  const store = configureStore({
    reducer:todReducer
})
