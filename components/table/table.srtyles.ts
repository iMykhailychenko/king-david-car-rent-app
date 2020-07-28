import { Theme, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    table: {
        marginBottom: theme.spacing(4),
    },
    head: {
        background: theme.palette.primary.main,
        color: theme.palette.grey[50],
        fontWeight: 600,
    },
    side: {
        fontWeight: 600,
        width: '30%',
    },
    img: {
        height: theme.spacing(30),
    }
}));