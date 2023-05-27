import { createAsyncThunk } from '@reduxjs/toolkit';
import { tokenOperations } from 'redux/authOperations/operations';

const BASE_URL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkApi) => {
    try {
      const res = await fetch(`${BASE_URL}/contacts`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${tokenOperations}`,
        },
      });
      if (!res.ok) throw new Error(`404`);
      const data = await res.json();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkApi) => {
    try {
      const res = await fetch(`${BASE_URL}/contacts`, {
        method: 'POST',
        body: JSON.stringify(newContact),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${tokenOperations}`,
        },
      });
      if (!res.ok) throw new Error(`404`);
      const data = await res.json();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkApi) => {
    try {
      const res = await fetch(`${BASE_URL}/contacts/${contactId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${tokenOperations}`,
        },
      });
      if (!res.ok) throw new Error(`404`);
      const data = await res.json();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
