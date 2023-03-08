import React from "react";
import {Button, List, TextField} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import {ListInterface} from "@/types/List";
import UserListItem from "@/copmponents/List/ListItems/UserListItem";
import ProductsListItem from "@/copmponents/List/ListItems/ProductsListItem";
import {SingleUserInterface} from "@/types/User";
import {SingleProductInterface} from "@/types/Products";
import CustomBox from "@/copmponents/Box/CustomBox";
import {useDispatch} from "react-redux";
import {filterProductsByKeyword} from "@/store/product/slice";
import {filterUsersByKeyword} from "@/store/user/slice";


const ItemsList: React.FC<ListInterface> = ({items, contentType}) => {
    const dispatch = useDispatch()
    const handleFilter = (keyword: string) => {
        switch (contentType) {
            case "user":
                dispatch(filterUsersByKeyword(keyword))
                return
            case "products":
                dispatch(filterProductsByKeyword(keyword))
                return
        }
    }

    return (
        <CustomBox>
            <TextField id="outlined-search" label="Filter" type="search"
                       onChange={(e) => handleFilter(e.target.value)}/>
            <List sx={{bgcolor: 'background.paper', maxHeight: '100%', overflowY: 'scroll'}}>
                {items.map((item, index) =>
                    contentType === 'user' ? <UserListItem user={item as SingleUserInterface} key={index}/> :
                        <ProductsListItem key={index} product={item as SingleProductInterface}/>
                )}

            </List>
            <Button variant="outlined" startIcon={<DeleteIcon/>}>
                Clear List
            </Button>
        </CustomBox>
    )
}

export default ItemsList