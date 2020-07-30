import React from 'react';
import { useSelector } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { getSingleCarSelector, getCheckinFrom, getCheckinTo } from '../../../redux/selectors';
import { totlaCheckinTime } from '../../../helpers/dateUtils';
import formatePrice from '../../../helpers/priceFormate';
import { IDate, ICar } from '../../../interfaces/interfaces';
import { useStyles } from '../table.srtyles';

const Date = () => {
    const styles = useStyles();
    // car
    const car: ICar = useSelector(getSingleCarSelector);

    // date/time
    const dateFrom: IDate = useSelector(getCheckinFrom);
    const dateTo: IDate = useSelector(getCheckinTo);
    const total: number = totlaCheckinTime(dateFrom, dateTo);

    return (
        <TableContainer className={styles.table} component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className={styles.head} colSpan={2}>Checkin resume</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell className={styles.side} component="th" scope="row">
                            Start date:
                        </TableCell>
                        <TableCell>
                            {`${dateFrom.day}.${dateFrom.month}.${dateFrom.year} ${dateFrom.time}:00`}
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={styles.side} component="th" scope="row">
                            End date:
                        </TableCell>
                        <TableCell>{`${dateTo.day}.${dateTo.month}.${dateTo.year} ${dateTo.time}:00`}</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={styles.side} component="th" scope="row">
                            Total rent time:
                        </TableCell>
                        <TableCell>{`${total} hours`}</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={styles.side} component="th" scope="row">
                            Total cost:
                        </TableCell>
                        <TableCell>{`$${formatePrice(total * car.price)}`}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default Date;
