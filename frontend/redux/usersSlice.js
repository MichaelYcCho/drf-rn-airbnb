import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: 'users',
    initialState: {
        isLoggedIn: false,
        token: null
    },
    reducers: {
        Login(state, action) {
            state.isLoggedIn = true;
            state.token = action.payload.token;
        },
        LogOut(state, action) {
            state.isLoggedIn = false;
            state.token = null;
        }
    }
});

export const { Login, LogOut } = userSlice.actions;
export default userSlice.reducer;
