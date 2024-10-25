import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data : []
}

const docsSlice = createSlice({
    name: 'docs',
    initialState,
    reducers: {
        addDoc: (state, action) => {
            state.data.push(action.payload)
        }
    }
})

export const {addDoc} = docsSlice.actions
export default docsSlice.reducer