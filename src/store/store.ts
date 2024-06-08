import { configureStore } from '@reduxjs/toolkit';

import authReducer from './slice/authSlice';
import authCookieReducer from './slice/authCookieSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    authCookie: authCookieReducer,
  },

  middleware: getDefaultMiddleware => getDefaultMiddleware(),
});

export default store;
