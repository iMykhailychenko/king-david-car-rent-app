import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        title: {
            marginBottom: theme.spacing(4),
            fontWeight: 600,
        },
        subtitle: {
            marginTop: theme.spacing(3),
            marginBottom: theme.spacing(2),
            textTransform: 'uppercase',
            fontSize: '1rem',
            fontWeight: 600,
            lineHeight: 1,
        },
        price: {
            color: theme.palette.secondary.main,
            fontWeight: 600,
        },
        text: {
            marginBottom: theme.spacing(1),
        },
        date: {
            marginBottom: theme.spacing(1),
            fontWeight: 600,
        },
        bold: {
            fontSize: '1.1rem',
            fontWeight: 600,
        },
        media: {
            height: 0,
            paddingTop: theme.spacing(30),
        },
    }),
);

export default useStyles;
