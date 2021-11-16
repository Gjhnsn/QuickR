import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import folderSlice from "./folderSlice";
import startCameraSlice from "./startCameraSlice";
import qrSlice from "./qrSlice";
import modalSlice from "./modalSlice";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedFolderState = persistReducer(persistConfig, folderSlice);

const store = configureStore({
  reducer: {
    folder: persistedFolderState,
    camera: startCameraSlice,
    qr: qrSlice,
    modal: modalSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);

export { persistor, store };
