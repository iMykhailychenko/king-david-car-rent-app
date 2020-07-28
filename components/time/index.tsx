import React from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Grid from '@material-ui/core/Grid';
import { IDate } from '../../interfaces/interfaces';
import useStyles from './time.styles';
import marks from './time.marks';

interface IProps {
    title: string;
    date: IDate;
    track?: false | 'normal' | 'inverted';
    onChange(event: any, value: number): void;
}

const Time = ({ title, date, track = 'normal', onChange }: IProps) => {
    const styles = useStyles();

    return (
        <Grid className={styles.container} item xs>
            <Typography className={styles.title} variant="h5" component="h3">
                {title}
            </Typography>
            <Grid className={styles.slider} item xs>
                <Slider
                    value={date.time}
                    onChange={onChange}
                    getAriaValueText={(value: number): string => value + ':00'}
                    aria-labelledby="discrete-slider-custom"
                    track={track}
                    step={1}
                    valueLabelDisplay="auto"
                    min={0}
                    max={24}
                    marks={marks}
                />
            </Grid>
        </Grid>
    );
};

export default Time;
