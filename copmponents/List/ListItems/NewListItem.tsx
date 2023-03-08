import React from "react";
import {Button} from "@mui/material";
import {NewListSingleItem} from "@/types/NewList";
import {useDispatch} from "react-redux";
import {remove} from "@/store/newList/slice";

const NewListItem: React.FC<{ item: NewListSingleItem }> = ({item}) => {
    const dispatch = useDispatch()
    const removeItem = (value: string) => {
        dispatch(remove(value))
    }
    return (
        <Button variant="contained" onClick={() => removeItem(item.description)}>{item.description}</Button>
    )
}

export default NewListItem