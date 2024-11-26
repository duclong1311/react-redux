import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice'
import userReducer from './slices/userSlice'
import loadingReducer from './slices/loadingSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer,
        loading: loadingReducer,
    },
})