import {UsersType} from "@/types/User";
import {EndPoints} from "@/constants/EndPoints";
import {customFetch} from "@/libs/fetch";

export const fetchAllUsers = async():Promise<UsersType> => {
    const response = await customFetch(EndPoints['Users'])
    return await response.json()
}

