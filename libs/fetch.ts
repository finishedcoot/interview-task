import {BASE_URL} from "@/constants/EndPoints";

export const customFetch = async (url: string, options: any = {}) => {
    return await fetch(`${BASE_URL}${url}`, options)
}