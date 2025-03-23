import { createSlice } from '@reduxjs/toolkit';
import { objTy } from '../../types';

interface BaseConfigStore {
    baseConfig: objTy;
}

export const initialState: BaseConfigStore = {
    baseConfig: {},
};

export const baseConfigSlice = createSlice({
    name: 'baseConfigStore',
    initialState,
    reducers: {
        setBaseConfig: (state, action) => {
            state.baseConfig = action.payload ?? {};
        },
    },
});

export const { setBaseConfig } = baseConfigSlice.actions;

export const requestBaseConfig = () => (_: any) => {
    // 请求
    // getBaseConfig().then(data => {
    //     if (data) {
    //         dispatch(setBaseConfig(data));
    //     }
    // });
};

export default baseConfigSlice.reducer;
