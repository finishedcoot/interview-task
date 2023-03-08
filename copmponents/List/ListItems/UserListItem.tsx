import React from "react";
import {CardActionArea, Divider, ListItem, ListItemText} from "@mui/material";
import {SingleUserInterface} from "@/types/User";
import {useDispatch} from "react-redux";
import {addToList} from "@/store/newList/slice"

const UserListItem: React.FC<{ user: SingleUserInterface }> = ({user}) => {
    const dispatch = useDispatch()
    const add = (item: SingleUserInterface) => {
        dispatch(addToList({
            id: item.id,
            description: item.name.firstname + ' ' + item.name.lastname
        }))
    }

    return (
        <>
            <CardActionArea onClick={() => add(user)}>
                <ListItem alignItems="flex-start" sx={{
                    justifyContent: 'flex-start',
                    py: 1,
                    pr: 10,
                }}>
                    <ListItemText
                        primary={user.name.firstname + ' ' + user.name.lastname}
                        secondary={
                            <React.Fragment>
                                {user.email}
                            </React.Fragment>
                        }
                    />

                </ListItem>
            </CardActionArea>
            <Divider variant="inset" component="li"/>
        </>
    )
}

export default UserListItem