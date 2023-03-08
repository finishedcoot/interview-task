import {ErrorPageInterface} from "./Errors";
import {UsersType} from "./User";
import {ProductsType} from "@/types/Products";

export interface HomePageInterface extends ErrorPageInterface {
    users: UsersType
    products: ProductsType
}