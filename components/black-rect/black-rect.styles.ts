import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        title: {
            marginBottom: theme.spacing(4),
            fontWeight: 700,
        },
        subtitle: {
            fontSize: 18,
            paddingBottom: theme.spacing(2),
        },
        paper: {
            marginBottom: theme.spacing(15),
            padding: theme.spacing(8),
            paddingTop: theme.spacing(30),
            background: theme.palette.grey['900'],
            color: theme.palette.primary.contrastText,
            '@media (max-width: 450px)': {
                marginBottom: theme.spacing(4),
                padding: theme.spacing(2),
                paddingTop: theme.spacing(20),
            },
        },
    }),
);

export default useStyles;
