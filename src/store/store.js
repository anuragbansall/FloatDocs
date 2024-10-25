import { configureStore } from "@reduxjs/toolkit";
import docsSlice from '../ReduxSlices/docsSlice.js'

export const store = configureStore({
    reducer: {
        docsSlice
    },
})