import { createSlice } from "@reduxjs/toolkit";
import { getUserData, updateUserData } from "./user-operations";

const initialState = {
	user: {},
	loading: false,
	error: null,
};

const userSlice = createSlice({
	name: "user",
	initialState,

	extraReducers: {
		[getUserData.pending]: (store) => {
			store.loading = true;
			store.error = null;
		},
		[getUserData.fulfilled]: (store, { payload }) => {
			store.loading = false;
			store.user = payload.user;
		},
		[getUserData.rejected]: (store, { payload }) => {
			store.loading = false;
			store.error = payload;
		},
		[updateUserData.pending]: (store) => {
			store.loading = true;
			store.error = null;
		},
		[updateUserData.fulfilled]: (store, { payload }) => {
			store.loading = false;
			store.user = { ...store.user, ...payload.user };
		},
		[updateUserData.rejected]: (store, { payload }) => {
			store.loading = false;
			store.error = payload;
		},
	},
});

export default userSlice.reducer;
