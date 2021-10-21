import { configureStore } from "@reduxjs/toolkit";
import folderSlice from "./folderSlice";
import startCameraSlice from "./startCameraSlice";
import qrSlice from "./qrSlice";

export default configureStore({
  reducer: {
    folder: folderSlice,
    camera: startCameraSlice,
    qr: qrSlice,
  },
});
