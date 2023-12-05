// import React, { useState } from "react";
import "../styles/insurances.css";
import Typography from '@mui/material/Typography';
import img1 from '../images/prepagas.png';

const Insurances = () => {
    return (
        <div className="nav_container">
            <div>
                <Typography variant="h2"
                    sx={{
                        fontFamily: 'rubik',
                        fontSize: '40px',
                        fontWeight: 70,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                    }}
                >
                    Our partners
                </Typography>
            </div>
            <img sx={{ maxWidth: '1030px' }} src={img1} alt='imagen de {img1}' />
        </div>
    )
}

export default Insurances;