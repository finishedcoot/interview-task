import {ErrorPageInterface} from "./Errors";
import {UsersType} from "./users";

export interface HomePageInterface extends ErrorPageInterface{
    users: UsersType
}