import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, deleteContact, addContact } from './operations';

const actionRooster = [fetchContacts, deleteContact, addContact];
const getAction = type => actionRooster.map(arc => arc[type]);

export const conSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLogin: false,
    isLoading: false,
    error: false,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.items.push(payload);
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(ret => ret.id !== payload.id);
      })
      .addMatcher(isAnyOf(...getAction('pending')), state => {
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(...getAction('rejected')), (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addMatcher(isAnyOf(...getAction('fulfilled')), state => {
        state.isLoading = false;
        state.error = null;
      });
  },
});

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    onFilter: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { onFilter } = filterSlice.actions;
export const contactsReducers = conSlice.reducer;
