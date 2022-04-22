import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rows: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setrows: (state, action) => ({
      ...state,
      rows: action.payload,
    }),
  },
});

// Action creators are generated for each case reducer function
export const { setrows } = todoSlice.actions;
export const todoRows = (state) => state.todo.rows;

export default todoSlice.reducer;
