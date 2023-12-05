import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link as LinkRouter } from 'react-router-dom';
import Button from '@mui/material/Button';
// import { GetDoctor } from "../service/doctorService";
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import img1 from '../images/ramdonMedics.png';
import "../styles/reservations.css";
// import "../styles/doctorCardExtend.css"
// useEffect(() => {
//     GetDoctor()
//         .then((doctorData) => {
//             setDoctor(doctorData);
//             setFilteredDoctors(doctorData);
//         })
//         .catch((error) => console.error("Error setting doctors:", error));
// }, []);

function DoctorCardExtended() {
    const params = useParams();

    const [doctor, setDoctor] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/api/doctors/' + params.id)
            .then((res) => res.json())
            .then((doctorData) => setDoctor(doctorData.doctor))
            .catch((err) => err);
        // eslint-disable-next-line 
    }, [])

    return (
        <>
            {
                doctor && <div className="card-Detail">
                    <Grid container className="grid-cards">
                        <Grid item className="grid-card">
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
                                    <p className="description">{doctor.description}</p>
                                    <p className="dni">DNI: {doctor.dni}</p>
                                    <p className="license">License: {doctor.license}</p>
                                    {/* <p className="meetCost" >${doctor.meetCost}</p> */}
                                </div>
                                <div className="btnContainer">
                                    <LinkRouter className='btn_details' to="/Reservations">
                                        <Button variant="contained" style={{ fontFamily: 'Open Sans', backgroundColor: 'green' }}>Back</Button>
                                    </LinkRouter>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            }
        </>
    )
}

export default DoctorCardExtended;