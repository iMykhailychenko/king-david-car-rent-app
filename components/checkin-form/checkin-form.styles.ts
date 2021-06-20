import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            marginTop: theme.spacing(15),
            marginBottom: theme.spacing(15),
            '@media (max-width: 1200px)': {
                display: 'flex',
                flexDirection: 'column-reverse',
                marginTop: theme.spacing(0),
            },
        },
        root: {
            display: 'flex',
            flexDirection: 'column',
        },
        title: {
            marginBottom: theme.spacing(4),
            fontWeight: 600,
        },
        input: {
            marginBottom: theme.spacing(5),
        },
    }),
);

export default useStyles;
