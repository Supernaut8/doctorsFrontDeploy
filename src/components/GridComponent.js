import React from "react";
import '../styles/GridComponent.css';
import { Grid } from '@mui/material';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import MasksIcon from '@mui/icons-material/Masks';

function GridComponent() {
    return (
        <Grid container className="grid-container">
            <Grid item className="grid-item">
                <div className="iconConten">
                    <LocalHospitalIcon className="icon" />
                </div>
                <div>Online Shifts</div>
                <div>Now taking appointments at our service centers is much easier and faster.</div>
            </Grid>
            <Grid item className="grid-item">
                <div className="iconConten">
                    <BloodtypeIcon className="icon" />
                </div>
                <div>Lab results</div>
                <div>Request your results through the web or consult them online</div>
            </Grid>
            <Grid item className="grid-item">
                <div className="iconConten">
                    <MedicalInformationIcon className="icon" />
                </div>
                <div>Medical Apt</div>
                <div>Get the certificate on the spot or by email</div>
            </Grid>
            <Grid item className="grid-item">
                <div className="iconConten">
                    <MedicalServicesIcon className="icon" />
                </div>
                <div>Medical guard</div>
                <div>Consult the specialists</div>
            </Grid>
            <Grid item className="grid-item">
                <div className="iconConten">
                    <MasksIcon className="icon" />
                </div>
                <div>Dengue</div>
                <div>News and information</div>
            </Grid>
            <Grid item className="grid-item">
                <div className="iconConten">
                    <VaccinesIcon className="icon" />
                </div>
                <div>Vaccination</div>
                <div>Flu, Covid, Hepatitis, etc.</div>
            </Grid>
            <Grid item className="grid-item">
                <div className="iconConten">
                    <BloodtypeIcon className="icon"  />
                </div>
                <div>Blood donation</div>
                <div>Headquarters near your location</div>
            </Grid>
            <Grid item className="grid-item">
                <div className="iconConten">
                    <BloodtypeIcon className="icon" />
                </div>
                <div>Courses and Training</div>
                <div>More info in...</div>
            </Grid>
{/* CAMBIO */}

            {/* <Grid item className="grid-item">
                <div className="iconConten">
                    <BloodtypeIcon className="icon" />
                </div>
                <div>Turnos Online</div>
                <div>Ahora sacar turnos en nuestros centros de atención es mucho más fácil y rápido</div>
            </Grid>
            <Grid item className="grid-item">
                <div className="iconConten">
                    <BloodtypeIcon className="icon" />
                </div>
                <div>Turnos Online</div>
                <div>Ahora sacar turnos en nuestros centros de atención es mucho más fácil y rápido</div>
            </Grid>
            <Grid item className="grid-item">
                <div className="iconConten">
                    <BloodtypeIcon className="icon" />
                </div>
                <div>Turnos Online</div>
                <div>Ahora sacar turnos en nuestros centros de atención es mucho más fácil y rápido</div>
            </Grid>
            <Grid item className="grid-item">
                <div className="iconConten">
                    <BloodtypeIcon className="icon" />
                </div>
                <div>Visiting hours</div>
                <div>Schedules</div>
            </Grid> */}

{/* CAMBIO */}
        </Grid>
    );
}

export default GridComponent;