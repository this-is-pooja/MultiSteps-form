import React, { useState } from "react";
import {
    Typography,
    Button,
    Stepper,
    Step,
    StepLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PersonalInfo from "../pages/Info";
import Address from "../pages/Address";
import Payment from "../pages/payment";
import Submit from "../pages/Finish";

const useStyles = makeStyles((theme) => ({
    button: {
        marginRight: theme.spacing(1),
    },
}));

function getSteps() {
    return [
        "Personal Details",
        "Address",
        "Payment Details",
    ];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return (
                <>
                    <PersonalInfo />
                </>
            );

        case 1:
            return (
                <>
                    <Address />
                </>
            );
        case 2:
            return (
                <>
                    <Payment />
                </>
            );
        default:
            return "step";
    }
}

const LinaerStepper = () => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    return (
        <div>
            <Stepper alternativeLabel activeStep={activeStep}>
                {steps.map((step, index) => {
                    const labelProps = {};
                    const stepProps = {};
                    return (
                        <Step {...stepProps} key={index}>
                            <StepLabel {...labelProps}>{step}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            <div style={{ textAlign: "center" }}>
                {activeStep === steps.length ? (
                    <Submit />
                ) : (
                    <>
                        <Typography style={{ marginBottom: "5rem" }}>
                            {getStepContent(activeStep)}
                        </Typography>
                        <div
                            style={{
                                bottom: "10rem",
                                left: 0
                            }}
                        >
                            <Button
                                className={classes.button}
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                variant="outlined"
                                color="primary"
                            >
                                Back
                            </Button>
                            <Button
                                className={classes.button}
                                variant="contained"
                                color="primary"
                                onClick={handleNext}
                            >
                                {activeStep === steps.length - 1 ? "Submit" : "Next"}
                            </Button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default LinaerStepper;