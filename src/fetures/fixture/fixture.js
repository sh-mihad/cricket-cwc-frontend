import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fixtures: []
};

export const fixture = createSlice({
  name: "fixtures",
  initialState,
  reducers: {
    addFixtures: (state, action) => {
      state.fixtures = [...action.payload];
    }
  }
});

export const { addFixtures } = fixture.actions;
export default fixture.reducer;