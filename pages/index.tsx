import React from 'react';
import Head from 'next/head';
import axios from 'axios';
import Container from '@material-ui/core/Container';
import Banner from '../components/banner';
import BlackRect from '../components/black-rect';
import CarCard from '../components/car-card';
import { initializeStore } from '../redux/store';
import { initialState } from '../redux/rootState';
import { ICar } from '../interfaces/interfaces';
import * as Actions from '../components/car-card/car-card.actions';

const Home = () => {
    axios.post(process.env.NEXT_PUBLIC_ORIGIN + '/analitics')

    return (
        <>
            <Head>
                <title>Car rent application</title>
            </Head>

            <header>
                <Container maxWidth="lg">
                    <Banner />
                </Container>
            </header>

            <main>
                <Container maxWidth="lg">
                    <BlackRect />
                    <CarCard />
                </Container>
            </main>
        </>
    );
};

// get cars on server side
export const getServerSideProps = async (context) => {
    // store
    const reduxStore = initializeStore(initialState);
    const { dispatch } = reduxStore;

    dispatch(Actions.start(true));

    // fetch
    try {
        const cars: ICar[] = await (await axios.get(process.env.NEXT_PUBLIC_ORIGIN + '/cars')).data;
        dispatch(Actions.success(cars));
    } catch {
        dispatch(Actions.error('Server error'));
    }

    return { props: { state: reduxStore.getState() } };
};

export default Home;
