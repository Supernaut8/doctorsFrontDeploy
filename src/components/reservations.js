import { useEffect, useSelector, useDispatch, useState, useRef } from "react";
import { GetDoctors } from "../service/doctorService.js";
import { Grid } from '@mui/material';
import "../styles/reservations.css";
import DoctorCard from "./doctorCard.js";
import Typography from '@mui/material/Typography';


function Reservations() {
    const [doctors, setDoctors] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [filteredDoctors, setFilteredDoctors] = useState([]);

    useEffect(() => {
        GetDoctors()
            .then((doctorData) => {
                setDoctors(doctorData);
                setFilteredDoctors(doctorData);
            })
            .catch((error) => console.error("Error setting doctors:", error));
    }, []);

    useEffect(() => {
        const filtered = doctors.filter((doctor) =>
            doctor.specialty.toLowerCase().startsWith(searchValue.toLowerCase())
        );
        setFilteredDoctors(filtered);
    }, [searchValue, doctors]);
    
    return (
        <div className='searchMedics'>
            <div>
                <Typography variant="p"
                    sx={{
                        mr: 2,
                        fontFamily: 'rubik',
                        fontSize: '40px',
                        fontWeight: 70,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                    }}
                >
                    Search by specialty
                </Typography>
            </div>
            <input type="text" className="input_search" onChange={(e) => setSearchValue(e.target.value)} />
            <Grid container className="grid-cards">
                {filteredDoctors.map((doctor, index) => (
                    <Grid item key={index} className="grid-card">
                        <DoctorCard doctor={doctor} />
                    </Grid>
                ))}
            </Grid>
        </div>

    )
}

export default Reservations;