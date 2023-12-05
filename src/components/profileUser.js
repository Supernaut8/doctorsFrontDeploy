import LetterAvatars from "./avatar";
import { Box } from "@mui/material";
import Typography from '@mui/material/Typography';
import PortraitIcon from '@mui/icons-material/Portrait';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PlaceIcon from '@mui/icons-material/Place';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Link as LinkRouter } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux"
import '../styles/profileUser.css'


function Profile() {
    const userLoged = useSelector(storage => storage.storeUser.userReducer.user);
    const username = userLoged.fullName;

    function InicialesMayus(str) {
        return str.replace(/\b\w/g, (match) => match.toUpperCase());
    }

    return (
        <Box className="mainProfile"
            sx={{
                backgroundImage: `url("/ramdonMedics1.png")`,
                backgroundSize: 'cover'
            }}
        >
            <Box className="containerProfile">
                <Box className="containerAvatar">
                    <LetterAvatars username={username} />
                    <Box component={"div"}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Typography className="fontTitleProfile"
                            variant="p"
                        >
                            {InicialesMayus(username)}
                        </Typography>
                        <Typography className="fontSubtitleProfile"
                            variant="p"
                        >
                            {userLoged.email}
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box component={"div"}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Box component={"div"}
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        maxWidth: '450px',
                        borderTop: '1px solid black',
                        borderLeft: '1px solid black',
                        borderRight: '1px solid black',
                        borderTopRightRadius: '8px',
                        borderTopLeftRadius: '8px',
                        backgroundColor: '#1E4D7B',
                    }}
                >
                    <LinkRouter className='btn_turnos' to='/'>
                        <PortraitIcon sx={{ color: 'red', height: '50px', width: '50px' }} />
                        <Typography className="fontProfile"
                            variant="span"
                        >
                            Personal information
                        </Typography>
                    </LinkRouter>
                </Box>
                <Box component={"div"}
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        maxWidth: '450px',
                        borderTop: '1px solid black',
                        borderLeft: '1px solid black',
                        borderRight: '1px solid black',
                        backgroundColor: '#1E4D7B',
                    }}
                >
                    <LinkRouter className='btn_turnos' to='/'>
                        <AccountBoxIcon sx={{ color: 'red', height: '50px', width: '50px' }} />
                        <Typography className="fontProfile"
                            variant="span"
                        >
                            Account data
                        </Typography>
                    </LinkRouter>
                </Box>
                <Box component={"div"}
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        maxWidth: '450px',
                        borderTop: '1px solid black',
                        borderLeft: '1px solid black',
                        borderRight: '1px solid black',
                        backgroundColor: '#1E4D7B',
                    }}
                >
                    <LinkRouter className='btn_turnos' to='/'>
                        <PlaceIcon sx={{ color: 'red', height: '50px', width: '50px' }} />
                        <Typography className="fontProfile"
                            variant="span"
                        >
                            Address
                        </Typography>
                    </LinkRouter>
                </Box>
                <Box component={"div"}
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        maxWidth: '450px',
                        border: '1px solid black',
                        borderBottomRightRadius: '8px',
                        borderBottomLeftRadius: '8px',
                        backgroundColor: '#1E4D7B',
                    }}
                >
                    {/* <LinkRouter to={`/associatedPlans/${plan._id}`}> */}
                    <LinkRouter to="/associatedPlans">
                        <CalendarMonthIcon sx={{ color: 'red', height: '50px', width: '50px' }} />
                        <Typography className="fontProfile"
                            variant="span"
                        >
                            Associated plans
                        </Typography>
                    </LinkRouter>
                </Box>
            </Box>
        </Box>
    );
}

export default Profile;