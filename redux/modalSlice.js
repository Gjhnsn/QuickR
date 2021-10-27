import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isNewItemModalOpen: false,
    isAddOrScanModalOpen: false,
    isNewFolderModalOpen: false,
  },
  reducers: {
    toggleNewItemModal: (state) => {
      state.isNewItemModalOpen = !state.isNewItemModalOpen;
    },
    toggleAddOrScanModal: (state) => {
      state.isAddOrScanModalOpen = !state.isAddOrScanModalOpen;
    },
    toggleNewFolderModal: (state) => {
      state.isNewFolderModalOpen = !state.isNewFolderModalOpen;
    }
  }, 
});

export const { toggleNewItemModal, toggleAddOrScanModal, toggleNewFolderModal } = modalSlice.actions;
export default modalSlice.reducer;
