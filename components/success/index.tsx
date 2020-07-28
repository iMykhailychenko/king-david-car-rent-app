import React from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { close } from './success.actions';
import { successSelector } from '../../redux/selectors';

const Success = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { open, text } = useSelector(successSelector);

    const handleClose = () => {
        dispatch(close());
        router.push('/');
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">Success!</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">{text}</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary" autoFocus>
                    Ok
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default Success;
