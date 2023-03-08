import * as React from 'react';
import Container from '@mui/material/Container';
import {Box} from "@mui/material";
import {GetServerSideProps, NextPage} from "next";
import {fetchAllUsers} from "@/services/users.services";
import {HomePageInterface} from "@/types/Pages";
import {fetchAllProducts} from "@/services/products.service";
import ItemsList from "@/copmponents/List/ItemsList";
import NewItemsList from "@/copmponents/List/NewItemsList";
import {StoreInterface, wrapper} from "@/store";
import {initializeUsers} from "@/store/user/slice";
import {useSelector} from "react-redux";
import {initializeProducts} from "@/store/product/slice";

const Home: NextPage<HomePageInterface> = () => {
    const {users, products} = useSelector((state: StoreInterface) => state)
    return (
        <Container maxWidth="xl" sx={{display: 'flex', justifyContent: 'space-between', gap: '10px'}}>
            <Box sx={{flex: '1'}}>
                <ItemsList items={users} contentType={'user'}/>
            </Box>
            <Box sx={{flex: '1'}}>
                <ItemsList items={products} contentType={'products'}/>
            </Box>
            <Box sx={{flex: '1'}}>
                <NewItemsList/>
            </Box>
        </Container>

    );
}

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps((store) => async () => {
    const [users, products] = await Promise.all([fetchAllUsers(), fetchAllProducts()])
    store.dispatch(initializeUsers(users))
    store.dispatch(initializeProducts(products))
    return {
        props: {
            users,
            products
        }
    }
})

export default Home
