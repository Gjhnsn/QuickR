import { configureStore } from "@reduxjs/toolkit";
import folderSlice from "./folderSlice";
import startCameraSlice from "./startCameraSlice";
import qrSlice from "./qrSlice";
import modalSlice from "./modalSlice";

export default configureStore({
  reducer: {
    folder: folderSlice,
    camera: startCameraSlice,
    qr: qrSlice,
    modal: modalSlice,
  },
});
