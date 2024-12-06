import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    id: null,
    first_name: null,
    last_name: null,
  },
  reducers: {
    setUser: (state, action) => {
      const {id, first_name, last_name} = action.payload;
      state.id = id;
      state.first_name = first_name;
      state.last_name = last_name;
    },
    clearUser: state => {
      state.id = null;
      state.first_name = null;
      state.last_name = null;
    },
  },
});

export const {setUser, clearUser} = userSlice.actions;
export default userSlice.reducer;
