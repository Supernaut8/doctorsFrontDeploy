import Typography from '@mui/material/Typography';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import img1 from '../images/plansMedics.png';
import "../styles/reservations.css";
import { Grid } from '@mui/material';
import "../styles/planGrid.css"

function PlanGrid({ plan }) {

    return (
        // <Grid container className="grid-cards">
            <Grid item className="grid-plan">
                <div className="container_plan">
                    <div className="logoContainer">
                        <LocalHospitalIcon sx={{ color: 'red' }} />
                        <Typography
                            variant="h6"
                            sx={{
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            DRFR
                        </Typography>
                    </div>
                    <div className="imgContainer">
                        <img src={img1} alt='imagen de {img1}' />
                    </div>
                    <div className="planDescription">
                        <p className="planName">{plan.planName}</p>
                        <p className="description">{plan.description}</p>
                        {/* <p className="coverage"> {plan.coverage} </p> */}
                        {/* <p className="cost">${plan.cost}</p> */}
                        <p className="_id">{plan._id}</p>
                    </div>
                </div>
            </Grid>
        // </Grid>
    )

}

export default PlanGrid;