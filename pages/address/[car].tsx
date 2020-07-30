import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import Container from '@material-ui/core/Container';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import AlarmOnIcon from '@material-ui/icons/AlarmOn';
import RoomIcon from '@material-ui/icons/Room';
import ToHomeLink from '../../components/to-home-link';
import MyStepper from '../../components/stepper';
import Places from '../../components/places';
import Map from '../../components/map';
import { initializeStore } from '../../redux/store';
import { initialState, IState } from '../../redux/rootState';
import { IPlace } from '../../components/places/places.types';
import { open } from '../../components/modal/modal.actions';
import { setRentStep } from '../../components/stepper/stepper.actions';

const warn = 'Please, select a city in the search bar!';

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

const Address = () => {
    const styles = useStyles();
    const dispatch = useDispatch();
    const router = useRouter();
    const activeStep = useSelector((state: IState): number => state.activeStep);
    const place = useSelector((state: IState): IPlace | null => state.place);

    // push history
    !activeStep && router.push('/rent/' + router.query.car);

    const handleClickBack = (): void => {
        router.push('/rent/' + router.query.car);
    };

    const handleClickNext = (): void => {
        const nextStep = () => {
            router.push('/confirm/' + router.query.car);
            dispatch(setRentStep(2));
        };

        place ? nextStep() : dispatch(open(warn));
    };

    return (
        <>
            <Head>
                <title>Select location | Car rent application</title>
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
                            <div className={styles.link}>
                                <Chip label="select location" color="primary" icon={<RoomIcon />} />
                            </div>
                        </>
                    </ToHomeLink>

                    <MyStepper />
                </Container>
            </header>

            <main>
                <Container maxWidth="lg">
                    <Places />
                    <Map />

                    <div className={styles.btn}>
                        <Button onClick={handleClickBack} variant="contained">
                            Prev step
                        </Button>
                        <Button onClick={handleClickNext} variant="contained" color="primary">
                            Next step
                        </Button>
                    </div>
                </Container>
            </main>
        </>
    );
};

// get cars on server side
export const getServerSideProps = async (context) => {
    const reduxStore = initializeStore(initialState);
    return { props: { state: reduxStore.getState() } };
};

export default Address;
