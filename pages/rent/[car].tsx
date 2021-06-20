import Chip from '@material-ui/core/Chip';
import Container from '@material-ui/core/Container';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AlarmOnIcon from '@material-ui/icons/AlarmOn';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import React, { ReactElement, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import CheckinDate from '../../components/checkin-date';
import CheckinForm from '../../components/checkin-form';
import * as Actions from '../../components/single-car/single-car.actions';
import MyStepper from '../../components/stepper';
import { setRentStep } from '../../components/stepper/stepper.actions';
import ToHomeLink from '../../components/to-home-link';
import { ICar } from '../../interfaces/interfaces';
import { initialState } from '../../redux/rootState';
import { initializeStore } from '../../redux/store';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        link: {
            display: 'block',
            marginRight: theme.spacing(2),
            marginBottom: theme.spacing(2),
            textDecoration: 'none',
            color: theme.palette.primary.main,
        },
        button: {
            display: 'flex',
            alignItems: 'center',
            marginTop: 'auto',
            fontWeight: 700,
        },
    }),
);

const Checkin = (): ReactElement => {
    const dispatch = useDispatch();
    const styles = useStyles();

    useEffect(() => {
        dispatch(setRentStep(0));
    }, [dispatch]);

    return (
        <>
            <Head>
                <title>Select time | Car rent application</title>
            </Head>

            <header>
                <Container maxWidth="lg">
                    <ToHomeLink>
                        <div className={styles.link}>
                            <Chip label="checking data" color="primary" icon={<AlarmOnIcon />} />
                        </div>
                    </ToHomeLink>
                    <MyStepper />
                </Container>
            </header>

            <main>
                <Container maxWidth="lg">
                    <CheckinDate />
                    <CheckinForm />
                </Container>
            </main>
        </>
    );
};

// get cars on server side
export const getServerSideProps: GetServerSideProps = async context => {
    // store
    const reduxStore = initializeStore(initialState);
    const { dispatch } = reduxStore;

    dispatch(Actions.start(true));

    // fetch
    try {
        const car: ICar = await (await axios.get(process.env.NEXT_PUBLIC_ORIGIN + '/cars/' + context.params.car)).data;
        dispatch(Actions.success(car));
    } catch {
        dispatch(Actions.error('Server error'));
    }

    return { props: { state: reduxStore.getState() } };
};

export default Checkin;
