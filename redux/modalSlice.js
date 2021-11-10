import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isNewItemModalOpen: false,
    isAddOrScanModalOpen: false,
    isAddUrlModalOpen: false,
    isEditUrlModalOpen: false,
    folderToEdit: null,
    linkToEdit: null,
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
    toggleEditUrlModal: (state) => {
      state.isEditUrlModalOpen = !state.isEditUrlModalOpen;
    },
    setFolderToEdit: (state, action) => {
      state.folderToEdit = action.payload;
    },
    setLinkToEdit: (state, action) => {
      state.linkToEdit = action.payload;
    },
  },
});

export const {
  toggleNewItemModal,
  toggleAddOrScanModal,
  toggleAddUrlModal,
  toggleEditUrlModal,
  setFolderToEdit,
  setLinkToEdit,
} = modalSlice.actions;
export default modalSlice.reducer;

/* 

dispatch the link id when we click on link edit button

folder.allFolder[folderToEdit].items <-- array

loop through each item id and compare with the one that matches linkToEdit

object assign 

delete old link

create new link with updated values

*/
