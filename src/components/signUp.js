import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import { Link as LinkRouter, useNavigate } from 'react-router-dom';

import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import userActions from '../redux/actions/usersActions';
import { useDispatch } from 'react-redux';

import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';


export default function SignUpForm() {
const navigate=useNavigate()
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const userData = {
      email: data.get('email'),
      password: data.get('password'),
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      from: "signUp-form"
    };
    dispatch(userActions.SignUpUser(userData))
  };

  // AGREGADO DEL BOTON GOOGLE
  const googleSubmit = async (e) => {
    const token = e.credential;
    const decoded = await jwtDecode(token);
    console.log(decoded)
    const userData = {
      email: decoded.email,
      password: decoded.family_name + "AMD23google",
      firstName: decoded.given_name,
      lastName: decoded.family_name,
      from: "google"
    };
    dispatch(userActions.SignUpUser(userData))
    navigate('/signin')
  };
  // AGREGADO DEL BOTON GOOGLE

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  return (
    <Box className="containerSignUp" sx={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      pb: 15,
      // alignItems: 'center',
      // p: 15,
      width: '100vw',
      backgroundImage: `url("/main_swiper_1.jpeg")`,
      backgroundSize: 'cover',
    }} >
      <Box component={"div"}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mt: 10,
          backgroundColor: '#1E4D7B',
          // ml: 5,
          // mr: 20,
          width: '40ch',
          maxHeight: '700px',
          border: '1px solid black',
          borderRadius: 4,
        }}
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            '& .MuiTextField-root': {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              mr: 'auto',
              ml: 'auto',
              mt: 2,
              mb: 2,
              width: '25ch',
              backgroundColor: 'white',
              color: 'green',
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
            Sign up
          </Typography>
          <div>
            <TextField
              name="firstName"
              required
              id="firstName"
              label="First name"
              defaultValue=""
            />
            <TextField
              name="lastName"
              required
              id="lastName"
              label="Last name"
              defaultValue=""
            />
            <TextField
              name="email"
              required
              id="email"
              label="Email address"
              defaultValue=""
            />
            <TextField
              name="password"
              required
              id="password"
              label="Password"
              type="password"
              autoComplete="current-password"
            />
          </div>
          <div>
            {/* <LinkRouter className='btn_details' to='/reservations'> */}
            <input
              type='submit'
              style={{
                borderRadius: '8px',
                borderStyle: 'none',
                fontFamily: 'Open Sans',
                color: 'white',
                backgroundColor: 'green',

              }}
            >

            </input>
            {/* <Button variant="contained" style={{ fontFamily: 'Open Sans', backgroundColor: 'green' }}>sign up</Button> */}
            {/* </LinkRouter> */}
          </div>
          <div
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: 'white'
            }}>
            <Checkbox sx={{
              backgroundColor: 'white'
            }}{...label} />
            <Typography variant="span"
              sx={{
                ml: 2,
                fontFamily: 'rubik',
                fontSize: '16px',
                letterSpacing: '.3rem',
                color: 'white',
              }}
            >
              Remember me
            </Typography>
          </div>
          <div>
            <LinkRouter className='btn_forgotPass' to='/forgotPass'>
              <Typography variant="p"
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  mt: 3,
                  fontFamily: 'rubik',
                  fontSize: '16px',
                  letterSpacing: '.3rem',
                  color: 'white',
                }}
              >
                Forgot your password?
              </Typography>
            </LinkRouter>
          </div>
          <Box component={"div"}
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              mt: 2
            }}
          >
            <GoogleLogin
              onSuccess={googleSubmit}
              onError={() => {
                console.log('Login Failed');
              }}
            />;
          </Box>
          <div>
            <LinkRouter className='btn_details' to='/signIn'>
              <Typography variant="p"
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  mt: 5,
                  maxWidth: '300px',
                  fontFamily: 'rubik',
                  fontSize: '16px',
                  letterSpacing: '.3rem',
                  color: 'white',
                }}
              >
                Already have an account? Sign in
              </Typography>
            </LinkRouter>
          </div>
        </Box>
      </Box>
    </Box>
  );
}
