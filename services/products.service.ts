import {EndPoints} from "@/constants/EndPoints";
import {customFetch} from "@/libs/fetch";
import {ProductsType} from "@/types/Products";

export const fetchAllProducts = async (): Promise<ProductsType> => {
    const response = await customFetch(EndPoints['Products'])
    return await response.json()
}