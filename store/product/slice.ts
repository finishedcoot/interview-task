import type {PayloadAction} from '@reduxjs/toolkit'
import {createSlice} from '@reduxjs/toolkit'
import {StoreKeys} from "@/constants/Store";
import {ProductsType} from "@/types/Products";


const initialState: ProductsType = []
const productSlice = createSlice({
    name: StoreKeys["PRODUCT"],
    initialState,
    reducers: {
        initializeProducts: (state, action: PayloadAction<ProductsType>) => {
            return [...action.payload]
        },
        filterProductsByKeyword: (state, action: PayloadAction<string>) => {
            if (action.payload === '') {
                return state
            }
            const filtered = state.filter((items) => items.title.toLowerCase()
                .replace(/\s+/g, '')
                .includes(action.payload.toLowerCase().replace(/\s+/g, '')))
            return action.payload !== '' ? filtered : state
        }
    },
})

export const {filterProductsByKeyword, initializeProducts} = productSlice.actions

export default productSlice.reducer