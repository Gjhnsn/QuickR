import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isNewItemModalOpen: false,
    isAddOrScanModalOpen: false,
    isNewFolderModalOpen: false,
    isAddUrlModalOpen: false,
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
    },
    toggleAddUrlModal: (state) => {
      state.isAddUrlModalOpen = !state.isAddUrlModalOpen
    }
  }, 
});

export const { toggleNewItemModal, toggleAddOrScanModal, toggleNewFolderModal, toggleAddUrlModal } = modalSlice.actions;
export default modalSlice.reducer;
