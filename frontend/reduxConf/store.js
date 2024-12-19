import {configureStore} from '@reduxjs/toolkit';
import userReducer from './userSlice';
import bookingReducer from './bookingSlice';
import companyReducer from './companySlice';
import annulerReducer from './deleteIdSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    booking: bookingReducer,
    company: companyReducer,
    annuler: annulerReducer,
  },
});

export default store;
