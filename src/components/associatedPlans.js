import React from "react";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";
import { Grid } from '@mui/material';
import PlanGrid from "./planGrid";
import "../styles/planGrid.css"

function AssociatedPlans() {
    const user = useSelector(store => store.storeUser.userReducer.user)
    const plans = user.planesSuscrip

    return (
        <div className="mainPlan">
            <Typography variant="h2"
                sx={{
                    fontFamily: 'rubik',
                    fontSize: '40px',
                    fontWeight: 70,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                }}
            >
                Yours associated plans
            </Typography>
            <Grid container className="grid-plans">
                {plans.map((plan, index) => (
                    <Grid item key={index} className="grid-plan">
                        <PlanGrid plan={plan} />
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default AssociatedPlans;