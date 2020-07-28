import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            marginTop: theme.spacing(20),
        },
        slider: {
            paddingLeft: theme.spacing(3),
            paddingRight: theme.spacing(3),
        },
        title: {
            marginBottom: theme.spacing(4),
            fontWeight: 600,
        },
    }),
);

export default useStyles;
