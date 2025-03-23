import { configureStore } from '@reduxjs/toolkit';
import userSlice from './store-slice/userStore';

export const store = configureStore({
    reducer: {
        userStore: userSlice,
    },
});
