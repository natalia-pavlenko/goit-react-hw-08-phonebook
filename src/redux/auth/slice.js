import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, refreshUser, register } from './operations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoading: false,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: bulder =>
    bulder
      .addCase(register.pending, (state, action) =>{
          state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        console.log(action);
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
     
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      }).addCase(logOut.fulfilled,  (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;

      }).addCase(refreshUser.fulfilled, (state, action) =>{
        console.log(action);
        state.user = action.payload;
        state.token = action.payload.token;
        state.isLoggedIn = true;
;
      })
});

export const authReduser = authSlice.reducer;
