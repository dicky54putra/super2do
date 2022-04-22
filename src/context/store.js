import { configureStore } from "@reduxjs/toolkit";
import todoStateSlice from "./todoSlice";

export default configureStore({
  reducer: {
    todo: todoStateSlice,
  },
});
