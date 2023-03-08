import {AnyAction, combineReducers, configureStore, Store} from '@reduxjs/toolkit'
import {createWrapper, HYDRATE} from "next-redux-wrapper";
import newList from "@/store/newList/slice";
import users from '@/store/user/slice'
import products from '@/store/product/slice'
import {UsersType} from "@/types/User";
import {NewListType} from "@/types/NewList";
import {ProductsType} from "@/types/Products";

export interface StoreInterface {
    users: UsersType,
    newList: NewListType,
    products: ProductsType
}

const combinedReducers = combineReducers({
    users,
    products,
    newList
})

const masterReducer = (state: any, action: AnyAction) => {
    if (action.type === HYDRATE) {
        return {
            ...state,
            ...action.payload
        }
    } else {
        return combinedReducers(state, action)
    }
}

export const makeStore = () => configureStore({
    reducer: masterReducer,
})
export const wrapper = createWrapper<Store<StoreInterface>>(makeStore)
