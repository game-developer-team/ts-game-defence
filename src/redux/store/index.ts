import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

// Redux persist =============================================================

import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Local storage

const persistKey = 'root';
const persistConfig = {
  key: persistKey,
  // localStorage 에 저장합니다.
  storage,
  // reducer 중에서 localstorage에 저장할 목록.
  whitelist: ['login', 'contractInfo', 'contractTradingErlmPersistOption'],
  // blacklist -> 그것만 제외합니다
};
// ===========================================================================

const reducers = {};
const combReducers = combineReducers(reducers);
const perReducers = persistReducer(persistConfig, combReducers);

const store = configureStore({
  reducer: perReducers,
});

const persistor = persistStore(store as any);

export type RootState = ReturnType<typeof combReducers>;
export { persistor, persistKey };
export default store;
