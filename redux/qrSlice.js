import { createSlice } from "@reduxjs/toolkit";

const createQr = (url) => `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${url}`;

export const qrSlice = createSlice({
    name: 'currentQr',
    initialState: {
        url: createQr(`hello`),
        urlName: `hello`,
    },
    reducers: {
        setQr: (state, action) => {
            state.url = createQr(action.payload.url)
            state.urlName = action.payload.urlName;
        }
    }
})

export const { setQr } = qrSlice.actions
export default qrSlice.reducer;