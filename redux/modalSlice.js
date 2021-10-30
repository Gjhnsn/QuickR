import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isNewItemModalOpen: false,
    isAddOrScanModalOpen: false,
    isNewFolderModalOpen: false,
    isAddUrlModalOpen: false,
    folderToEdit: null,
    editMode: false,
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
      state.editMode = false;
      // state.folderToEdit = null;
    },
    toggleAddUrlModal: (state) => {
      state.isAddUrlModalOpen = !state.isAddUrlModalOpen;
    },
    toggleEditFolderModal: (state, action) => {
      state.editMode = true;
      state.isNewFolderModalOpen = !state.isNewFolderModalOpen;
      state.folderToEdit = action.payload;
    },
  },
});

export const {
  toggleNewItemModal,
  toggleAddOrScanModal,
  toggleNewFolderModal,
  toggleAddUrlModal,
  toggleEditFolderModal,
} = modalSlice.actions;
export default modalSlice.reducer;
