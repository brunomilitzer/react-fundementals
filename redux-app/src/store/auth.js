import {createSlice} from "@reduxjs/toolkit";

const initialAuthState = {isAuthenticated: false};

const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            console.log('Login');
            state.isAuthenticated = true;
        },
        logout(state) {
            console.log('Logout');
            state.isAuthenticated = false;
        }
    }
});

export const authActions = authSlice.actions;
export default authSlice.reducer;