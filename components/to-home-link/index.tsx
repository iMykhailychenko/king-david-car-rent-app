import React, { ReactChild } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Link from 'next/link';
import HomeIcon from '@material-ui/icons/Home';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        wrp: {
            display: 'flex',
            marginTop: theme.spacing(8),
        },
        link: {
            display: 'block',
            marginRight: theme.spacing(2),
            textDecoration: 'none',
            color: theme.palette.primary.main,
        },
        icon: {
            marginRight: theme.spacing(1),
            width: 20,
            height: 20,
        },
    }),
);

interface IProps {
    children?: ReactChild;
}

const ToHomeLink = ({ children }: IProps) => {
    const styles = useStyles();

    return (
        <div className={styles.wrp}>
            <Link href="/">
                <a className={styles.link}>
                    <Chip label="back to home page" icon={<HomeIcon />} clickable />
                </a>
            </Link>
            {children && children}
        </div>
    );
};

export default ToHomeLink;
