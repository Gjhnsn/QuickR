import { configureStore } from "@reduxjs/toolkit";
import folderSlice from "./folderSlice";
import startCameraSlice from "./startCameraSlice";

export default configureStore({
  reducer: {
    folder: folderSlice,
    camera: startCameraSlice,
  },
});
