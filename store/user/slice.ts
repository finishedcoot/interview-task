import type {PayloadAction} from '@reduxjs/toolkit'
import {createSlice} from '@reduxjs/toolkit'
import {UsersType} from "@/types/User";
import {StoreKeys} from "@/constants/Store";


const initialState: UsersType = []
const usersSlice = createSlice({
    name: StoreKeys["USER"],
    initialState,
    reducers: {
        initializeUsers: (state, action: PayloadAction<UsersType>) => {
            return [...action.payload]
        },
        filterUsersByKeyword: (state, action: PayloadAction<string>) => {

            const filtered = state.filter((items) => items.name.firstname.toLowerCase()
                .replace(/\s+/g, '')
                .includes(action.payload.toLowerCase().replace(/\s+/g, '')))
            return action.payload !== '' ? filtered : state
        }
    },
})

export const {filterUsersByKeyword, initializeUsers} = usersSlice.actions

export default usersSlice.reducer