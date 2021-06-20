import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import React, { ChangeEvent, ReactElement } from 'react';

import { IDate } from '../../interfaces/interfaces';
import marks from './time.marks';
import useStyles from './time.styles';

interface IProps {
    title: string;
    date: IDate;
    track?: false | 'normal' | 'inverted';
    onChange(event: ChangeEvent, value: number): void;
}

const Time = ({ title, date, track = 'normal', onChange }: IProps): ReactElement => {
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
