import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            marginTop: theme.spacing(15),
            marginBottom: theme.spacing(15),
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
