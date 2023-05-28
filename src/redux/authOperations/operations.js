import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://connections-api.herokuapp.com';
export let tokenOperations = '';

export const register = createAsyncThunk(
  'auth/register',
  async (register, thunkApi) => {
    try {
      const res = await fetch(`${BASE_URL}/users/signup`, {
        method: 'POST',
        body: JSON.stringify(register),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!res.ok) throw new Error(`404`);
      const data = await res.json();
      tokenOperations = data.token;
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk('auth/login', async (login, thunkApi) => {
  try {
    const res = await fetch(`${BASE_URL}/users/login`, {
      method: 'POST',
      body: JSON.stringify(login),
      headers: { 'Content-Type': 'application/json' },
    });
    if (!res.ok) throw new Error(`404`);
    const data = await res.json();
    tokenOperations = data.token;
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const logout = createAsyncThunk('auth/logout', async (_, thunkApi) => {
  try {
    const res = await fetch(`${BASE_URL}/users/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${tokenOperations}`,
      },
    });
    if (!res.ok) throw new Error(`404`);
    const data = await res.json();
    tokenOperations = '';
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const getCurrentUser = createAsyncThunk(
  'auth/current',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (!persistedToken) return thunkAPI.rejectWithValue();

    tokenOperations = persistedToken;

    try {
      const response = await fetch(`${BASE_URL}/users/current`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${tokenOperations}`,
        },
      });
      if (!response.ok) throw new Error(`404`);
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
