import 'date-fns';

import DateFnsUtils from '@date-io/date-fns';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { createCustomDateObj, createNativeDateObj } from '../../helpers/dateUtils';
import { IDate } from '../../interfaces/interfaces';
import { getCheckinFrom, getCheckinTo } from '../../redux/selectors';
import Calendar from '../calendar';
import Time from '../time';
import { checkinFromDate, checkinToDate } from './checkin-date.actions';
import useStyles from './checkin-date.styles';

const CheckinDate = (): ReactElement => {
    const styles = useStyles();
    const matches = useMediaQuery('(max-width:1200px)');

    // date objects
    const dispatch = useDispatch();
    const dateFrom: IDate = useSelector(getCheckinFrom);
    const dateTo: IDate = useSelector(getCheckinTo);

    // calendar handlers
    const handleChangeFrom = (date: Date): void => {
        const customDateObj = createCustomDateObj(date);
        dispatch(checkinFromDate(customDateObj));
    };

    const handleChangeTo = (date: Date): void => {
        dispatch(checkinToDate(createCustomDateObj(date)));
    };

    // time handlers
    const handleChangeTimeFrom = (_: unknown, time: number): void => {
        const customDateObj = { ...dateFrom, time };
        dispatch(checkinFromDate(customDateObj));
    };

    const handleChangeTimeTo = (_: unknown, time: number): void => {
        dispatch(checkinToDate({ ...dateTo, time }));
    };

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container spacing={matches ? 1 : 10}>
                <Grid className={styles.container} item xs={12} md={6}>
                    <Typography className={styles.title} variant="h5" component="h3">
                        From
                    </Typography>
                    <Typography className={styles.text} variant="body1">
                        Checkout time must be bigger than checkin. Checkin can be only in the next 2 hours (from current time and
                        not sooner).
                    </Typography>
                    <Calendar date={createNativeDateObj(dateFrom)} start={2} onChange={handleChangeFrom} />
                    <Time title="Select begining time" date={dateFrom} track="inverted" onChange={handleChangeTimeFrom} />
                </Grid>

                <Grid className={styles.container} item xs={12} md={6}>
                    <Typography className={styles.title} variant="h5" component="h3">
                        To
                    </Typography>
                    <Typography className={styles.text} variant="body1">
                        The total time of booking must be more than 4 hours
                    </Typography>
                    <Calendar date={createNativeDateObj(dateTo)} start={6} onChange={handleChangeTo} />
                    <Time title="Select end time" date={dateTo} onChange={handleChangeTimeTo} />
                </Grid>
            </Grid>
        </MuiPickersUtilsProvider>
    );
};

export default CheckinDate;
