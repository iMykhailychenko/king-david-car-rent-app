import React, { memo, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import MapContainer from './map.container.js';
import { IState } from '../../redux/rootState';
import { open } from '../modal/modal.actions';
import axios from 'axios';

const useStyles = makeStyles((theme: Theme) => ({
    map: {
        position: 'relative',
        width: '100%',
        height: 500,
        marginTop: theme.spacing(10),
        marginBottom: theme.spacing(4),
        borderRadius: theme.shape.borderRadius,
    },
}));

const mapStyles = {
    width: '100%',
    height: '100%',
    borderRadius: '10px',
};

interface IMarker {
    lat: number;
    lng: number;
}

const KIEV: IMarker = { lat: 50.45, lng: 30.5242 };
const isCyrillic = (text: string): boolean => /[а-я]/i.test(text);
const warn = 'You may have forgotten to change your keyboard layout! Please enter the city name in latin alphabet';

interface IProps {
    google: {
        maps: any;
    };
    loaded: boolean;
}

const MyMap = (props: IProps) => {
    const styles = useStyles();
    const dispatch = useDispatch();
    const address = useSelector((state: IState): string => state.address);
    const [uluru, setUluru] = useState<IMarker>(KIEV);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const newUluru = await (await axios.get(process.env.NEXT_PUBLIC_ORIGIN + '/geocod/' + address)).data;
                setUluru(newUluru);
            } catch (error) {
                console.error(error);
            }
        };

        if (isCyrillic(address)) {
            dispatch(open(warn));
            return;
        }

        props.google && address.length && fetchData();
    }, [address]);

    return (
        <div className={styles.map}>
            <MapContainer zoom={14} google={props.google} uluru={uluru} />
        </div>
    );
};

export default GoogleApiWrapper({
    apiKey: process.env.NEXT_PUBLIC_GOOGLE,
})(MyMap);
