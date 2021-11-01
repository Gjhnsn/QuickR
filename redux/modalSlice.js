import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isNewItemModalOpen: false,
    isAddOrScanModalOpen: false,
    isFolderActionModalOpen: false,
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
    toggleFolderActionModal: (state) => {
      state.isFolderActionModalOpen = !state.isFolderActionModalOpen;
      state.editMode = false;
      state.folderToEdit = null;
    },
    toggleAddUrlModal: (state) => {
      state.isAddUrlModalOpen = !state.isAddUrlModalOpen;
    },
    toggleEditFolderModal: (state, action) => {
      state.editMode = true;
      state.isFolderActionModalOpen = !state.isFolderActionModalOpen;
      state.folderToEdit = action.payload;
    },
  },
});

export const {
  toggleNewItemModal,
  toggleAddOrScanModal,
  toggleFolderActionModal,
  toggleAddUrlModal,
  toggleEditFolderModal,
} = modalSlice.actions;
export default modalSlice.reducer;
