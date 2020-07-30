import React from 'react';
import { useSelector } from 'react-redux';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { IState } from '../../redux/rootState';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            marginTop: theme.spacing(10),
            marginBottom: theme.spacing(10),
            borderRadius: theme.shape.borderRadius,
            backgroundColor: theme.palette.background.paper,
        },
    }),
);

const getSteps = (): string[] => ['Select rent duration', 'Choose rent location', 'Confirmation'];

const MyStepper = () => {
    const styles = useStyles();
    const steps = getSteps();
    const activeStep = useSelector((state: IState): number => state.activeStep);
    const matches = useMediaQuery('(max-width:550px)');

    return (
        <Stepper className={styles.root} activeStep={activeStep} orientation={matches ? 'vertical' : 'horizontal'} alternativeLabel={!matches}>
            {steps.map((label) => (
                <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                </Step>
            ))}
        </Stepper>
    );
};

export default MyStepper;
