import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Autocomplete from '@material-ui/lab/Autocomplete';
import parse from 'autosuggest-highlight/parse';
import axios from 'axios';
import debounce from 'lodash.debounce';
import React, { ReactElement, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IState } from '../../redux/rootState';
import { open } from '../modal/modal.actions';
import { place } from './places.actions';
import { useStyles } from './places.styles';
import { initPlace, IPlace } from './places.types';

const isCyrillic = (text: string): boolean => /[а-я]/i.test(text);
const warn = 'You may have forgotten to change your keyboard layout! Please enter the city name in latin alphabet';

const Places = (): ReactElement => {
    const dispatch = useDispatch();
    const styles = useStyles();
    const stateValue = useSelector((state: IState): IPlace => state.place);

    const [value, setValue] = useState<IPlace>(stateValue);
    const [options, setOptions] = useState<IPlace[]>([stateValue]);

    const handleChange = (_, options) => {
        if (isCyrillic(options)) {
            dispatch(open(warn));
            return;
        }

        if (options.length) {
            axios
                .get(process.env.NEXT_PUBLIC_ORIGIN + '/places/' + options)
                .then((res: { data: IPlace[] }): void => {
                    setOptions(res.data);
                })
                .catch(error => {
                    console.error(error);
                    setValue(initPlace);
                    setOptions([initPlace]);
                });
        }
    };

    return (
        <>
            <Typography className={styles.title} variant="h5" component="h3">
                Select locations across the world
            </Typography>

            <Typography className={styles.text} variant="body1">
                Whether you want to visit the main attractions or find those hidden gems only accessible by car, with more than
                +100500 car rental located around the world.
            </Typography>

            <Autocomplete
                getOptionLabel={option => (typeof option === 'string' ? option : option.description)}
                getOptionSelected={(option, value) => option.id === value.id}
                filterOptions={x => x}
                options={options}
                autoComplete
                includeInputInList
                filterSelectedOptions
                value={value}
                onChange={(_, newValue: IPlace) => {
                    setValue(newValue);
                    dispatch(place(newValue));
                }}
                onInputChange={debounce(handleChange, 300)}
                renderInput={params => <TextField {...params} label="Add a location" variant="outlined" fullWidth />}
                renderOption={option => {
                    const matches = option.matched;
                    const parts = parse(
                        option.main_text,
                        matches.map(match => [match.offset, match.offset + match.length]),
                    );

                    return (
                        <Grid container alignItems="center">
                            <Grid item>
                                <LocationOnIcon className={styles.icon} />
                            </Grid>
                            <Grid item xs>
                                {parts.map((part, index) => (
                                    <span key={index} style={{ fontWeight: part.highlight ? 700 : 400 }}>
                                        {part.text}
                                    </span>
                                ))}
                                <Typography variant="body2" color="textSecondary">
                                    {option.secondary_text}
                                </Typography>
                            </Grid>
                        </Grid>
                    );
                }}
            />
        </>
    );
};

export default Places;
