import { createSlice } from "@reduxjs/toolkit";

const createQr = (url) =>
  `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${url}`;

export const qrSlice = createSlice({
  name: "currentQr",
  initialState: {
    url: ``,
    urlName: ``,
    description: ``,
    urlAddress: ``,
  },
  reducers: {
    setQr: (state, action) => {
      state.url = createQr(action.payload.url);
      state.urlName = action.payload.urlName;
      state.description = action.payload.description;
      state.urlAddress = action.payload.url;
    },
    resetQr: (state) => {
      // const { url, urlName, description, urlAddress } = state;
      state.url = "";
      state.urlName = "";
      state.description = "";
      state.urlAddress = "";
    },
  },
});

export const { setQr, resetQr } = qrSlice.actions;
export default qrSlice.reducer;
