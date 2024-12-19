import {createSlice} from '@reduxjs/toolkit';

const annulerSlice = createSlice({
  name: 'annuler',
  initialState: {
    id: null,
  },
  reducers: {
    setAnnuler: (state, action) => {
      const {id} = action.payload;
      state.id = id;
    },
    removeAnnuler: state => {
      state.id = null;
    },
  },
});

export const {setAnnuler, removeAnnuler} = annulerSlice.actions;
export default annulerSlice.reducer;
