import React from "react";
import CustomBox from "@/copmponents/Box/CustomBox";
import {Stack} from "@mui/system";
import {useSelector} from "react-redux";
import {StoreInterface} from "@/store";
import NewListItem from "@/copmponents/List/ListItems/NewListItem";

const NewItemsList: React.FC = () => {
    const newList = useSelector((state: StoreInterface) => state.newList)
    return (
        <CustomBox>
            <Stack direction="row" gap={2} flexWrap={'wrap'}>
                {newList.map((item, index) => <NewListItem key={index} item={item}/>)}
            </Stack>
        </CustomBox>
    )

}

export default NewItemsList