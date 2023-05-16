import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from "../../api/user";

export const getUserData = createAsyncThunk(
	"user/getUserData",
	async (_, { rejectWithValue }) => {
		try {
			const result = await api.getUserData();
			return result;
		} catch ({ response }) {
			const { status, data } = response;
			const error = {
				status,
				message: data.message,
			};
			return rejectWithValue(error);
		}
	}
);

export const updateUserData = createAsyncThunk(
	"user/updateUserData",
	async (data, { rejectWithValue }) => {
		try {
			const result = await api.updateUserData(data);
			return result;
		} catch ({ response }) {
			const { status, data } = response;
			const error = {
				status,
				message: data.message,
			};
			return rejectWithValue(error);
		}
	}
);
