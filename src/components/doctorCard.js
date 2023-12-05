import React from "react";
import { Link as LinkRouter } from 'react-router-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import img1 from '../images/ramdonMedics.png';

import "../styles/doctorCard.css"

function DoctorCard({ doctor }) {
    return (
        <div className="container_doctor">
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
            <div className="doctorDescription">
                <p className="fullName">{doctor.name} {doctor.lastName}</p>
                <p className="speciality">{doctor.specialty}</p>
            </div>
            <div className="btn_container">
                <LinkRouter  to={`/doctorExtend/${doctor._id}`}>
                    {/* <button className="buttons_cards">Details</button> */}
                    <Button variant="contained" style={{ fontFamily: 'Open Sans', backgroundColor: 'green' }}>Details</Button>
                </LinkRouter>
                <LinkRouter className='btn_plans' to={`/plansDoctor/${doctor._id}`}>
                    <Button variant="contained" style={{ fontFamily: 'Open Sans', backgroundColor: 'red' }}>Plans</Button>
                    {/* <button className="buttons_cards button_plans">Plans</button> */}
                </LinkRouter>
            </div>
        </div>
    )
}

export default DoctorCard;