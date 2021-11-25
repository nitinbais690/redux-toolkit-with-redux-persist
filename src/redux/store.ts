import AsyncStorageLib from '@react-native-async-storage/async-storage';
import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from '@reduxjs/toolkit';
import userReducer from './feature/user/slice';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistReducer,
  persistStore,
} from 'redux-persist';
import { logger } from 'redux-logger';

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorageLib,
  whitelist: ['success'] // only navigation will be persisted
};

const reducer = combineReducers({
  user: persistReducer(rootPersistConfig, userReducer),
});

export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
});

export default () => {
  let persistor = persistStore(store);
  return {persistor};
};

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
