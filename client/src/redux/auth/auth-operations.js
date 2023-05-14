import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from "../../api/auth";

export const register = createAsyncThunk(
	"auth/register",
	async (data, { rejectWithValue, dispatch }) => {
		try {
			const result = await api.register(data);
			console.log("result", result);
			dispatch(login({ email: data.email, password: data.password }));
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

export const login = createAsyncThunk(
	"auth/login",
	async (data, { rejectWithValue }) => {
		try {
			const result = await api.login(data);
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

export const logout = createAsyncThunk(
	"auth/logout",
	async (_, { rejectWithValue }) => {
		try {
			const result = await api.logout();
			console.log("result", result);
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

export const current = createAsyncThunk(
	"auth/current",
	async (_, { rejectWithValue, getState }) => {
		try {
			const { auth } = getState();

			const result = await api.getCurrent(auth.token);
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
