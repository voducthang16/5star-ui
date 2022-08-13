import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    value: null,
};
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signIn: (state, action) => {
            state.value = action.payload;
        },
        signOut: (state) => {
            state.value = null;
        },
    },
});

const { reducer, actions } = authSlice;
export const { signIn, signOut } = actions;
export default reducer;
