import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {UserState} from "@/types/Users";

const initialState: UserState = []
export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        remove: (state,action: PayloadAction<number>) => {
            return state.filter((user)=>user.id !== action.payload)
        }
    },
})

export const { remove} = userSlice.actions

export default userSlice.reducer