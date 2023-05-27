import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  contactsReducers,
  filterSlice,
} from '../redux/contactOperations/slice';
import { authReducers } from './authOperations/slice';

// const contactsPersistConfig = {
//   key: 'contacts',
//   storage,
//   whitelist: ['items'],
// };

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

// const contactsRed = persistReducer(contactsPersistConfig, contactsReducers);
const authRed = persistReducer(authPersistConfig, authReducers);

export const store = configureStore({
  reducer: {
    contacts: contactsReducers,
    filter: filterSlice.reducer,
    auth: authRed,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persist = persistStore(store);
