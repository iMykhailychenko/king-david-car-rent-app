import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Container from '@material-ui/core/Container';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AlarmOnIcon from '@material-ui/icons/AlarmOn';
import AssistantPhotoIcon from '@material-ui/icons/AssistantPhoto';
import RoomIcon from '@material-ui/icons/Room';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as Loader from '../../components/loader/loader.actions';
import * as Warn from '../../components/modal/modal.actions';
import * as Actions from '../../components/single-car/single-car.actions';
import MyStepper from '../../components/stepper';
import * as Success from '../../components/success/success.actions';
import FinalTable from '../../components/table';
import ToHomeLink from '../../components/to-home-link';
import { totlaCheckinTime } from '../../helpers/dateUtils';
import formatPrice from '../../helpers/priceFormate';
import { ICar, IDate } from '../../interfaces/interfaces';
import { initialState, IState } from '../../redux/rootState';
import { getCheckinFrom, getCheckinTo, getSingleCarSelector } from '../../redux/selectors';
import { initializeStore } from '../../redux/store';

interface IForm {
    firstName: string;
    lastName: string;
    email: string;
}

export const useStyles = makeStyles((theme: Theme) =>
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

        btn: {
            marginBottom: theme.spacing(10),

            '& > *': {
                margin: theme.spacing(1),
            },
        },
    }),
);

const warn = 'Network error, please try again later';
const success = 'Hooray! The booking was successful. A confirmation has been sent to your email!';

const Confirm = (): ReactElement => {
    const dispatch = useDispatch();
    const styles = useStyles();
    const router = useRouter();

    // car
    const car: ICar = useSelector(getSingleCarSelector);

    // form
    const form = useSelector((state: IState): IForm => state.form);

    // date/time
    const dateFrom: IDate = useSelector(getCheckinFrom);
    const dateTo: IDate = useSelector(getCheckinTo);
    const total: number = totlaCheckinTime(dateFrom, dateTo);
    const totalCost: string = formatPrice(total * car.price);

    // stepper
    const activeStep = useSelector((state: IState): number => state.activeStep);

    // push history
    !activeStep && router.push('/rent/' + router.query.car);

    const handleClickBack = (): void => {
        router.push('/address/' + router.query.car);
    };

    const handleClickConfirm = (): void => {
        dispatch(Loader.start());

        axios
            .post(process.env.NEXT_PUBLIC_ORIGIN + '/confirm', { ...form, ...car, total, totalCost })
            .then(() => {
                dispatch(Loader.end());
                dispatch(Success.open(success));
            })
            .catch(error => {
                dispatch(Loader.end());
                dispatch(Warn.open(warn));
                console.log(error);
            });
    };

    return (
        <>
            <Head>
                <title>Confirmation | Car rent application</title>
            </Head>

            <header>
                <Container maxWidth="lg">
                    <ToHomeLink>
                        <>
                            <Link href={'/rent/' + router.query.car}>
                                <a className={styles.link}>
                                    <Chip label="checking data" icon={<AlarmOnIcon />} clickable />
                                </a>
                            </Link>
                            <Link href={'/address/' + router.query.car}>
                                <a className={styles.link}>
                                    <Chip label="select location" icon={<RoomIcon />} clickable />
                                </a>
                            </Link>
                            <div className={styles.link}>
                                <Chip label="almost done" color="primary" icon={<AssistantPhotoIcon />} />
                            </div>
                        </>
                    </ToHomeLink>

                    <MyStepper />
                </Container>
            </header>

            <main>
                <Container maxWidth="lg">
                    <FinalTable />

                    <div className={styles.btn}>
                        <Button onClick={handleClickBack} variant="contained">
                            Prev step
                        </Button>
                        <Button onClick={handleClickConfirm} variant="contained" color="primary">
                            Confirm
                        </Button>
                    </div>
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

export default Confirm;
