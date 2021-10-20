import { createSlice } from "@reduxjs/toolkit";

const createQr = (url) => `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${url}`

export const qrSlice = createSlice({
    name: 'currentQr',
    initialState: {
        url: createQr(`test`),
    },
    reducers: {
        setQr: (state, action) => {
            state.url = createQr(action.payload)
        }
    }
})

export const { setQr } = qrSlice.actions
export default qrSlice.reducer;