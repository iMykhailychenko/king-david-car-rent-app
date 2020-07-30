import React from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import SingleCar from '../single-car';
import useStyles from './checkin-form.styles';
import * as form from './checkin-form.form';
import { setRentStep } from '../stepper/stepper.actions';
import { formActions } from './checkin-form.actions';
import { open } from '../modal/modal.actions';
import { getCheckinFrom, getCheckinTo } from '../../redux/selectors';
import { IState } from '../../redux/rootState';
import { isCorrectStart, isCorrectEnd } from '../../helpers/dateUtils';
import { ICheckin, IDate } from '../../interfaces/interfaces';

const CheckinForm = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const styles = useStyles();

    // date/time
    const dateFrom: IDate = useSelector(getCheckinFrom);
    const dateTo: IDate = useSelector(getCheckinTo);

    // form
    const value = useSelector((state: IState): ICheckin => state.form);
    const formik = useFormik({
        initialValues: value,
        validationSchema: form.userSchema,
        onSubmit: (values) => {
            if (!isCorrectStart(dateFrom, 2)) {
                dispatch(open(form.warn.start));
                return;
            }

            if (!isCorrectEnd(dateFrom, dateTo, 4)) {
                dispatch(open(form.warn.end));
                return;
            }

            // stepper
            dispatch(setRentStep(1));

            // form data
            dispatch(formActions(values));

            // push history
            router.push('/address/' + router.query.car);
        },
    });

    return (
        <Grid className={styles.container} container spacing={5}>
            <Grid className={styles.root} item xs={12} md={4}>
                <Typography className={styles.title} variant="h5" component="h3">
                    Personal information
                </Typography>

                <form onSubmit={formik.handleSubmit} noValidate autoComplete="off">
                    <TextField
                        className={styles.input}
                        id="firstName"
                        name="firstName"
                        error={formik.touched.firstName && !!formik.errors.firstName}
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        label={
                            formik.touched.firstName && !!formik.errors.firstName
                                ? formik.errors.firstName
                                : 'First name'
                        }
                        variant="outlined"
                        fullWidth
                    />

                    <TextField
                        className={styles.input}
                        id="lastName"
                        name="lastName"
                        error={formik.touched.lastName && !!formik.errors.lastName}
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        label={
                            formik.touched.lastName && !!formik.errors.lastName ? formik.errors.lastName : 'Last name'
                        }
                        variant="outlined"
                        fullWidth
                    />

                    <TextField
                        className={styles.input}
                        id="email"
                        name="email"
                        error={formik.touched.email && !!formik.errors.email}
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        label={formik.touched.email && !!formik.errors.email ? formik.errors.email : 'Email'}
                        variant="outlined"
                        fullWidth
                    />

                    <Button variant="contained" color="primary" size="large" type="submit">
                        Next step
                    </Button>
                </form>
            </Grid>

            <Grid className={styles.root} item xs={12} md={8}>
                <SingleCar />
            </Grid>
        </Grid>
    );
};

export default CheckinForm;
