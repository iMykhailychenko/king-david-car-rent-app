import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './banner.styles';

const Banner = () => {
    const styles = useStyles();

    return (
        <>
            <Paper className={styles.paper} elevation={0}>
                <Grid item xs={6}>
                    <Typography className={styles.title} variant="h2" component="h1">
                        Car rentals
                    </Typography>
                    <Typography className={styles.subtitle} variant="subtitle2">
                        Search for cheap rental cars with us and rent a car that suits you best.
                    </Typography>
                </Grid>
            </Paper>

            <Grid className={styles.container} container spacing={8}>
                <Grid item xs={6}>
                    <Typography className={styles.title} variant="h4" component="h2">
                        We believe that car hire is about more than getting from A to B. It's about the journey itself.
                        The experiences you can have along the way and the cars you can explore in.
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography className={styles.subtitle} variant="subtitle2">
                        Whether you want to visit the main attractions or find those hidden gems only accessible by car,
                        with more than +100500 car rental located around the world.
                    </Typography>
                    <Typography className={styles.subtitle} variant="subtitle2">
                        We understand your needs to rent a car may differ. That's why we have a range of car and van
                        rental solutions available.
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
};

export default Banner;
