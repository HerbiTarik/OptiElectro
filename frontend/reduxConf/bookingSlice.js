import {createSlice} from '@reduxjs/toolkit';

const bookingSlice = createSlice({
  name: 'booking',
  initialState: {
    id: null,
  },
  reducers: {
    setBookings: (state, action) => {
      const {id} = action.payload;
      state.id = id;
    },
    removeBookings: state => {
      state.id = null;
    },
  },
});

export const {setBookings, removeBookings} = bookingSlice.actions;
export default bookingSlice.reducer;
