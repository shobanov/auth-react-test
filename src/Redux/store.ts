import { combineReducers, createStore } from 'redux';
import { authReducer } from './auth-reduser';

const rootReducer = combineReducers({
  auth: authReducer,
});

export const store = createStore(
  rootReducer,
);

export type AppRootStateType = ReturnType<typeof rootReducer>;