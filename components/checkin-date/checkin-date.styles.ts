import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        title: {
            fontWeight: 600,
        },
        text: {
            flexGrow: 2,
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(4),
        },
        item: {
            marginBottom: theme.spacing(10),
        },
        container: {
            display: 'flex',
            flexDirection: 'column',
        },
    }),
);

export default useStyles;
