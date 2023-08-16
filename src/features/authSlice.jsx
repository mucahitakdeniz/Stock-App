import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    currentuser: null,
    loading: false,
    error: false,
    isAdmin: false,
    token: null,
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    loginSuccess: (state, action) => {
      state.loading = true;
      state.currentuser = action.payload?.user?.username;
      state.isAdmin = action.payload?.user?.is_superuser;
      state.token = action.payload?.key;
    },
    logoutSucces: (state) => {
      state.loading = false;
      state.currentuser = null;
      state.token = null;
    },
    registerSucces: (state, { payload }) => {
      state.loading = false;
      state.currentuser = payload?.username;
      state.token = payload.token;
      state.error = false;
    },
    fetchFall: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchStart,
  loginSuccess,
  logoutSucces,
  registerSucces,
  fetchFall,
} = authSlice.actions;

export default authSlice.reducer;
