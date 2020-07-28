import React from 'react';
import { useSelector } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { IState } from '../../../redux/rootState';
import { useStyles } from '../table.srtyles';

interface IForm {
    firstName: string;
    lastName: string;
    email: string;
}

const User = () => {
    const styles = useStyles();
    const { firstName, lastName, email } = useSelector((state: IState): IForm => state.form);

    return (
        <TableContainer className={styles.table} component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className={styles.head}>Your personal data</TableCell>
                        <TableCell className={styles.head}></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell className={styles.side} component="th" scope="row">
                            First name:
                        </TableCell>
                        <TableCell>{firstName}</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={styles.side} component="th" scope="row">
                            Last name:
                        </TableCell>
                        <TableCell>{lastName}</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={styles.side} component="th" scope="row">
                            Email:
                        </TableCell>
                        <TableCell>{email}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default User;
