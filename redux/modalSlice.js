import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isNewItemModalOpen: false,
    isAddOrScanModalOpen: false,
  },
  reducers: {
    toggleNewItemModal: (state) => {
      state.isNewItemModalOpen = !state.isNewItemModalOpen;
    },
    toggleAddOrScanModal: (state) => {
      state.isAddOrScanModalOpen = !state.isAddOrScanModalOpen;
    },
  },
});

export const { toggleNewItemModal, toggleAddOrScanModal } = modalSlice.actions;
export default modalSlice.reducer;
