import React from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import { ICar } from '../../interfaces/interfaces';
import { getCarsListSelector } from '../../redux/selectors';
import useStyles from './car-card.styles';



const CarCard = () => {
    const styles = useStyles();
    const cars: ICar[] = useSelector(getCarsListSelector);

    return (
        <Grid className={styles.container} container spacing={5}>
            {cars.map(({ id, title, text, price, img, rating }) => (
                <Grid item xs={12} sm={6} lg={4} key={id}>
                    <Card className={styles.root}>
                        <CardHeader title={title} subheader={price + ' $/hour'} />

                        <CardMedia className={styles.media} image={img} title={title} />

                        <CardContent className={styles.cardContent}>
                            <Typography component="legend">{rating.text}</Typography>
                            <Rating name={rating.text} precision={0.5} value={rating.value} readOnly />
                        </CardContent>

                        <CardContent className={styles.cardContent}>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {text}
                            </Typography>
                        </CardContent>

                        <CardActions className={styles.cardBtn}>
                            <Link href="/rent/[car]" as={`/rent/${id}`}>
                                <a className={styles.link}>
                                    <Button className={styles.button} color="primary">
                                        rent now
                                    </Button>
                                </a>
                            </Link>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default CarCard;
