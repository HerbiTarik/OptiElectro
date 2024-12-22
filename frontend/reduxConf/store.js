import {configureStore} from '@reduxjs/toolkit';
import userReducer from './userSlice';
import bookingReducer from './bookingSlice';
import companyReducer from './companySlice';
import annulerReducer from './deleteIdSlice';
import imgReducer from './imgSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    booking: bookingReducer,
    company: companyReducer,
    annuler: annulerReducer,
    img: imgReducer,
  },
});

export default store;
