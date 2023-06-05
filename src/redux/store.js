import { configureStore } from '@reduxjs/toolkit';

import storage from 'redux-persist/lib/storage';

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

import { filterReducer } from './filterSlice';
import { contactsReducer } from './contactsSlice';
import { authReduser } from './auth/slice';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistRootReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
  reducer:{ 
    contacts: persistRootReducer,
    filter: filterReducer ,
    auth: authReduser,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
