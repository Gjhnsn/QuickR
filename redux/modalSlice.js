import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isNewItemModalOpen: false,
    isAddUrlModalOpen: false,
    isEditUrlModalOpen: false,
    folderToEdit: null,
    linkToEdit: null,
    scannedLink: null,
    editMode: false,
  },
  reducers: {
    toggleNewItemModal: (state) => {
      state.isNewItemModalOpen = !state.isNewItemModalOpen;
    },
    toggleAddUrlModal: (state) => {
      state.isAddUrlModalOpen = !state.isAddUrlModalOpen;
    },
    toggleEditUrlModal: (state) => {
      state.isEditUrlModalOpen = !state.isEditUrlModalOpen;
    },
    setFolderToEdit: (state, action) => {
      state.folderToEdit = action.payload;
    },
    setLinkToEdit: (state, action) => {
      state.linkToEdit = action.payload;
    },
    setScannedLink: (state, action) => {
      state.scannedLink = action.payload;
    },
  },
});

export const {
  toggleNewItemModal,
  toggleAddUrlModal,
  toggleEditUrlModal,
  setFolderToEdit,
  setLinkToEdit,
  setScannedLink,
} = modalSlice.actions;
export default modalSlice.reducer;
