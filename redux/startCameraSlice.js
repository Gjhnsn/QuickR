import { createSlice } from "@reduxjs/toolkit";

export const startCameraSlice = createSlice({
  name: "startCamera",
  initialState: {
    setStartCamera: false,
  },
  reducers: {
    openCamera: (state) => {
      state.setStartCamera = true;
    },
    closeCamera: (state) => {
      state.setStartCamera = false;
    },
  },
});

export const { openCamera, closeCamera } = startCameraSlice.actions;
export default startCameraSlice.reducer;
