import type {PayloadAction} from '@reduxjs/toolkit'
import {createSlice} from '@reduxjs/toolkit'
import {StoreKeys} from "@/constants/Store";
import {NewListSingleItem, NewListType} from "@/types/NewList";


const initialState: NewListType | undefined = []
const newListSlice = createSlice({
    name: StoreKeys["NEW_LIST"],
    initialState,
    reducers: {
        addToList: (state, action: PayloadAction<NewListSingleItem>) => {
            state.push(action.payload)
        },
        remove: (state, action: PayloadAction<string>) => {
            return state.filter((item) => item.description !== action.payload)
        },
    },
})

export const {addToList, remove} = newListSlice.actions

export default newListSlice.reducer