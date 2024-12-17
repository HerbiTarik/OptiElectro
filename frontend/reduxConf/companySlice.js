import {createSlice} from '@reduxjs/toolkit';

const companySlice = createSlice({
  name: 'company',
  initialState: {
    id: null,
  },
  reducers: {
    setCompany: (state, action) => {
      const {id} = action.payload;
      state.id = id;
    },
    removeCompany: state => {
      state.id = null;
    },
  },
});

export const {setCompany, removeCompany} = companySlice.actions;
export default companySlice.reducer;
