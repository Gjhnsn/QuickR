import { configureStore } from "@reduxjs/toolkit";
import folderReducer from "./folderReducer";

export default configureStore({
    reducer: {
        folder: folderReducer,
    }
});