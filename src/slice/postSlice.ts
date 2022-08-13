import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import Config from '~/config';
const initialState = {
    value: null,
};
let url: string = 'api/post';

export const getUserPost = createAsyncThunk('post/getUserPost', async (params, thunkApi) => {
    console.log(params);
    const res = await axios.get(Config.apiUrl + url + `/user/${params}`, { withCredentials: true });
    const data = await res.data;
    return data;
});

export const post = createAsyncThunk('post/getUserPost', async (params, thunkApi) => {
    const res = await axios.post(Config.apiUrl + url, params, { withCredentials: true });
    const data = await res.data;
    return data;
});

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {},
    extraReducers: {
        [getUserPost.fulfilled.type]: (state, action) => {
            state = action.payload;
        },
    },
});

const { reducer: postReducer, actions } = postSlice;
// export const { signIn, signOut } = actions;
export default postReducer;
