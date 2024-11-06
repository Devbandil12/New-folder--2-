import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import interviewReducer from "./interviewDetails";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import sessionStorage from "redux-persist/lib/storage/session";

const persistConfig = {
  key: 'root',
  storage:sessionStorage,
};

const persistedReducer = persistReducer(persistConfig, interviewReducer);

export const store = configureStore({
  reducer: {
    interview: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

export const persistor = persistStore(store);
