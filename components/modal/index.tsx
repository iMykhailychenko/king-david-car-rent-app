import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { modalSelector } from '../../redux/selectors';
import { close } from './modal.actions';

const Modal = (): ReactElement => {
    const dispatch = useDispatch();
    const { open, text } = useSelector(modalSelector);

    const handleClose = () => {
        dispatch(close());
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">Opsss! There is something wrong!</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">{text}</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Agree
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default Modal;
