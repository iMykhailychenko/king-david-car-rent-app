import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';

import { totlaCheckinTime } from '../../helpers/dateUtils';
import formatPrice from '../../helpers/priceFormate';
import { ICar, IDate } from '../../interfaces/interfaces';
import { getCheckinFrom, getCheckinTo, getSingleCarSelector } from '../../redux/selectors';
import useStyles from './single-car.styles';

const SingleCar = (): ReactElement => {
    const styles = useStyles();
    // car
    const car: ICar = useSelector(getSingleCarSelector);

    // date/time
    const dateFrom: IDate = useSelector(getCheckinFrom);
    const dateTo: IDate = useSelector(getCheckinTo);
    const total: number = totlaCheckinTime(dateFrom, dateTo);

    return (
        <>
            <Typography className={styles.title} variant="h5" component="h3">
                Short decription
            </Typography>

            <Grid container spacing={5}>
                <Grid item xs={12} md={6}>
                    <CardMedia className={styles.media} image={'../' + car.img} title={car.title} />
                </Grid>

                <Grid item xs={12} md={6}>
                    <Typography className={styles.bold} variant="body2" gutterBottom>
                        {`total rental time: ${total} hours`}
                    </Typography>
                    <Typography className={styles.bold} variant="body2" gutterBottom>
                        total price:
                        <span className={styles.price}>{` $${formatPrice(total * car.price)} `}</span>
                        {`- $${car.price}.00/hour`}
                    </Typography>

                    <Typography className={styles.subtitle} color="primary" variant="h6" component="h4">
                        {car.title}
                    </Typography>
                    <Typography className={styles.text} variant="body2" color="textSecondary" component="p">
                        {car.text}
                    </Typography>

                    <Typography className={styles.date} variant="body2" color="textSecondary" component="p">
                        {`start date: ${dateFrom.day}.${dateFrom.month}.${dateFrom.year} ${dateFrom.time}:00`}
                    </Typography>
                    <Typography className={styles.date} variant="body2" color="textSecondary" component="p">
                        {`end date: ${dateTo.day}.${dateTo.month}.${dateTo.year} ${dateTo.time}:00`}
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
};

export default SingleCar;
