import {createSlice} from '@reduxjs/toolkit';

const imgSlice = createSlice({
  name: 'img',
  initialState: {
    uri: null,
  },
  reducers: {
    setImage: (state, action) => {
      const {uri} = action.payload;
      state.uri = uri;
    },
    removeImg: state => {
      state.uri = null;
    },
  },
});

export const {setImage, removeImg} = imgSlice.actions;
export default imgSlice.reducer;
