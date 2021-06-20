import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Router from 'next/router';
import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IState } from '../../redux/rootState';
import { end, start } from './loader.actions';

const useStyles = makeStyles((theme: Theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

const Loader = (): ReactElement => {
    const styles = useStyles();
    const dispatch = useDispatch();
    const loading = useSelector((state: IState): boolean => state.loading);

    Router.events.on('routeChangeStart', () => {
        dispatch(start());
    });

    Router.events.on('routeChangeComplete', () => {
        dispatch(end());
    });

    return (
        <Backdrop className={styles.backdrop} open={loading}>
            <CircularProgress color="inherit" />
        </Backdrop>
    );
};

export default Loader;
