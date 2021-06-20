import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            marginTop: theme.spacing(20),
            '@media (max-width: 1200px)': {
                marginTop: theme.spacing(5),
                marginBottom: theme.spacing(10),
            },
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
