import {UsersType} from "@/types/User";
import {ProductsType} from "@/types/Products";

export interface ListInterface {
    items: UsersType | ProductsType,
    contentType: 'user' | 'products'
}