import Chip from '@material-ui/core/Chip';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import Link from 'next/link';
import React, { ReactChild, ReactElement } from 'react';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        wrp: {
            display: 'flex',
            flexWrap: 'wrap',
            marginTop: theme.spacing(8),
        },
        link: {
            display: 'block',
            marginRight: theme.spacing(2),
            marginBottom: theme.spacing(2),
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

const ToHomeLink = ({ children }: IProps): ReactElement => {
    const styles = useStyles();

    return (
        <div className={styles.wrp}>
            <Link href="/">
                <a className={styles.link}>
                    <Chip label="back to home page" icon={<HomeIcon />} clickable />
                </a>
            </Link>
            {children}
        </div>
    );
};

export default ToHomeLink;
