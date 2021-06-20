import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Rating from '@material-ui/lab/Rating';
import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';

import { ICar } from '../../../interfaces/interfaces';
import { getSingleCarSelector } from '../../../redux/selectors';
import { useStyles } from '../table.srtyles';

const Car = (): ReactElement => {
    const styles = useStyles();
    const car: ICar = useSelector(getSingleCarSelector);

    return (
        <TableContainer className={styles.table} component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className={styles.head} colSpan={2}>
                            Car information
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell className={styles.side} component="th" scope="row">
                            Car type:
                        </TableCell>
                        <TableCell>{car.title}</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={styles.side} component="th" scope="row">
                            Car description:
                        </TableCell>
                        <TableCell>{car.text}</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={styles.side} component="th" scope="row">
                            Car img:
                        </TableCell>
                        <TableCell>
                            <img className={styles.img} src={'/' + car.img} alt={car.title} />
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={styles.side} component="th" scope="row">
                            Average customer rating:
                        </TableCell>
                        <TableCell>
                            <Rating precision={0.5} value={car.rating.value} readOnly />
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={styles.side} component="th" scope="row">
                            Price per hour:
                        </TableCell>
                        <TableCell>{car.price + '$'}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default Car;
