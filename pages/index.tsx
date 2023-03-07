import * as React from 'react';
import Container from '@mui/material/Container';
import {Avatar, Box, Button, CardActionArea, Divider, List, ListItem, ListItemAvatar, ListItemText, TextField} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import {GetServerSideProps, NextPage} from "next";
import {fetchAllUsers} from "@/services/users.services";
import {HomePageInterface} from "@/types/Pages";

const Home:NextPage<HomePageInterface>  = (pageProps) => {
  const {users} =pageProps
    return (
        <Container maxWidth="xl" sx={{display:'flex', justifyContent:'space-between', gap:'10px'}}>
            <Box component="span" sx={{ mt:4, p: 2,height:'90vh', borderStyle:'solid', borderRadius:'10px', borderWidth:'1px', display:'flex', flexDirection:'column', gap:5 }}>
                <TextField id="outlined-search" label="Search field" type="search" />
                <List sx={{bgcolor: 'background.paper', maxHeight:'100%', overflowY:'scroll'}} >
                    {users.map((user,index)=>
                        <>
                        <CardActionArea>
                        <ListItem key={index} alignItems="flex-start" sx={{justifyContent:'flex-start',py:3, pr:10, borderWidth:'1px', borderColor:'red', borderStyle:'solid'}}>

                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
                        </ListItemAvatar>
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
                    )}

                </List>
                <Button variant="outlined" startIcon={<DeleteIcon />}>
                    Clear List
                </Button>
            </Box>
            <Box style={{background: 'red'}}>
            </Box>
            <Box style={{background: 'red'}}>
            </Box>
        </Container>

    );
}

export const getServerSideProps:GetServerSideProps = async () => {
    const users = await fetchAllUsers()
    return{
        props:{
            users
        }
    }
}

export default Home
