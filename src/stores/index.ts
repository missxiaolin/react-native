import { configureStore } from '@reduxjs/toolkit';
import userSlice from './store-slice/userStore';
import baseConfigSlice from './store-slice/baseConfigStore';

export const store = configureStore({
    reducer: {
        userStore: userSlice,
        baseConfigStore: baseConfigSlice,
    },
});
