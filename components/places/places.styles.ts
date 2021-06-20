import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    icon: {
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(2),
    },
    title: {
        fontWeight: 600,
    },
    text: {
        flexGrow: 2,
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(4),
    },
}));
