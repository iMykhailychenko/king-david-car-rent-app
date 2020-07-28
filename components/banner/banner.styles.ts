import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        title: {
            position: 'relative',
            zIndex: 2,
            fontWeight: 600,
        },
        subtitle: {
            position: 'relative',
            zIndex: 2,
            fontSize: 22,
            paddingBottom: theme.spacing(2),
        },
        container: {
            marginTop: theme.spacing(5),
            marginBottom: theme.spacing(5),
        },
        paper: {
            position: 'relative',
            marginTop: theme.spacing(5),
            padding: theme.spacing(8),
            paddingTop: theme.spacing(30),
            backgroundImage: 'url(/banner.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'bottom',
            backgroundRepeat: 'no-repeat',
            color: theme.palette.primary.contrastText,
            '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: `linear-gradient(to bottom, rgba(0,0,0,0) 30%, ${theme.palette.common.black}) 20%`,
                borderRadius: theme.shape.borderRadius,
                opacity: 0.8,
            },
        },
    }),
);
