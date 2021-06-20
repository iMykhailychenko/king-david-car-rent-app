import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';

import { IState } from '../../../redux/rootState';
import { IPlace } from '../../places/places.types';
import { useStyles } from '../table.srtyles';

const Location = (): ReactElement => {
    const styles = useStyles();
    const location: IPlace = useSelector((state: IState): IPlace => state.place);

    return (
        <TableContainer className={styles.table} component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className={styles.head} colSpan={2}>
                            Checkin location
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell className={styles.side} component="th" scope="row">
                            Car location:
                        </TableCell>
                        <TableCell>{location.description}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default Location;
