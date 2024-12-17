import {configureStore} from '@reduxjs/toolkit';
import userReducer from './userSlice';
import bookingReducer from './bookingSlice';
import companyReducer from './companySlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    booking: bookingReducer,
    company: companyReducer,
  },
});

export default store;
