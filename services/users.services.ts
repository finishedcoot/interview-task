import {UsersType} from "@/types/users";
import {EndPoints} from "@/constants/EndPoints";

export const fetchAllUsers = async():Promise<UsersType> => {
    const response = await fetch(EndPoints['Users'])
    return await response.json()
}