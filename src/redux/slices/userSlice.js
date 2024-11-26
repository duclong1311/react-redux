import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { startLoading, stopLoading } from './loadingSlice';
import axios from 'axios';

export const fetchAllUsers = createAsyncThunk(
    'users/fetchAllUsers',
    async (_, { dispatch }) => {
        dispatch(startLoading());
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            return response.data
        } finally {
            dispatch(stopLoading());
        }

    },
)

const initialState = {
    listUsers: [],
    status: 'idle',
    error: null,
}

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllUsers.pending, (state) => {
                state.status = 'pending';
                state.error = null;
            })
            .addCase(fetchAllUsers.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.users = action.payload; // Dữ liệu từ API
            })
            .addCase(fetchAllUsers.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload; // Lỗi được lưu trữ
            });
    },
})

export default userSlice.reducer