import { createSlice } from "@reduxjs/toolkit";

const initialState = { currentLocation: 0 };

const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.currentLocation = action.payload;
    },
  },
});

export const { setLocation } = navSlice.actions;

//Selectors
export const selectLocation = (state) => state.nav.currentLocation;

export default navSlice.reducer;
