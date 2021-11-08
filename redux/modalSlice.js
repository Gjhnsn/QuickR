import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isNewItemModalOpen: false,
    isAddOrScanModalOpen: false,
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
    toggleAddUrlModal: (state) => {
      state.isAddUrlModalOpen = !state.isAddUrlModalOpen;
    },
    setFolderToEdit: (state, action) => {
      state.folderToEdit = action.payload;
    }
  },
});

export const {
  toggleNewItemModal,
  toggleAddOrScanModal,
  toggleAddUrlModal,
  setFolderToEdit
} = modalSlice.actions;
export default modalSlice.reducer;
