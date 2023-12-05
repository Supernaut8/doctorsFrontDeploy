import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import { Link as LinkRouter } from 'react-router-dom';
import Button from '@mui/material/Button';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import userActions from '../redux/actions/usersActions';
import { useDispatch } from 'react-redux';



export default function ForgotPass() {
      const dispatch = useDispatch()
      const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const userData = {
          email: data.get('email'),
          password: data.get('password'),
          from: "signUp-form"
        };
        dispatch(userActions.SignInUser(userData))
      };
    // const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    return (
        <Box className="containerSignIn" sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            pb: 15,
            // alignItems: 'center',
            // p: 15,
            width: '100vw',
            backgroundImage: `url("/main_swiper_1.jpeg")`,
            backgroundSize: 'cover'
        }} >
            <Box component={"div"}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    mt: 10,
                    backgroundColor: '#1E4D7B',
                    // ml: 5,
                    // mr: 20,
                    width: '40ch',
                    height: '70ch',
                    border: '1px solid black',
                    borderRadius: 4
                }}
            >
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{
                        '& .MuiTextField-root': {
                            display: 'flex',
                            flexDirection: 'column',
                            m: 'auto',
                            mt: 2,
                            mb: 2,
                            width: '25ch',
                            backgroundColor: 'white',
                            color: 'green'
                        },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div className="logoContainer">
                        <LocalHospitalIcon sx={{ color: 'red' }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none'
                            }}
                        >
                            DRFR
                        </Typography>
                    </div>
                    <Typography variant="p"
                        noWrap
                        sx={{
                            fontFamily: 'rubik',
                            fontSize: '30px',
                            fontWeight: 70,
                            letterSpacing: '.3rem',
                            color: 'white',
                        }}
                    >
                        Recover your account
                    </Typography>
                    <div>
                        <TextField
                            name="email"
                            required
                            id="email"
                            label="Email address"
                            defaultValue=""
                        />
                    </div>
                    <div>
                        <LinkRouter className='btn_cancel' to='/signIn'>
                            <Button
                                variant="contained"
                                style={{ fontFamily: 'Open Sans', backgroundColor: 'green' }}
                                sx={{
                                    mt: 2,
                                    mb: 12
                                }}
                            >
                                Cancel
                            </Button>

                        </LinkRouter>
                        <LinkRouter className='btn_details' to='/reservations'>
                            <Button
                                variant="contained"
                                style={{ fontFamily: 'Open Sans', backgroundColor: 'green' }}
                                sx={{
                                    mt: 2,
                                    mb: 12
                                }}
                            >
                                Next
                            </Button>
                        </LinkRouter>
                        {/* <input
              type='submit'
              style={{
                borderRadius: '8px',
                borderStyle: 'none',
                fontFamily: 'Open Sans',
                color: 'white',
                backgroundColor: 'green',

              }}
            >
            </input> */}

                    </div>
                </Box>
            </Box>
        </Box>
    );
}
