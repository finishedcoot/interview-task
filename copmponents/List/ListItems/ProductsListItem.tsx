import React from "react";
import {SingleProductInterface} from "@/types/Products";
import {Avatar, CardActionArea, Divider, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import {useDispatch} from "react-redux";
import {addToList} from "@/store/newList/slice";

const ProductsListItem: React.FC<{ product: SingleProductInterface }> = ({product}) => {
    const dispatch = useDispatch()
    const add = (item: SingleProductInterface) => {
        dispatch(addToList({
            id: item.id,
            description: item.title
        }))
    }

    return (
        <>
            <CardActionArea onClick={() => add(product)}>
                <ListItem alignItems="flex-start" sx={{
                    justifyContent: 'flex-start',
                    py: 1,
                    pr: 10,
                }}>

                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src={product.image}/>
                    </ListItemAvatar>
                    <ListItemText
                        primary={product.title}
                        secondary={
                            <React.Fragment>
                                {product.description}
                            </React.Fragment>
                        }
                    />

                </ListItem>
            </CardActionArea>
            <Divider variant="inset" component="li"/>
        </>
    )
}

export default ProductsListItem