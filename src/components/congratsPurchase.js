import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import userActions from "../redux/actions/usersActions";
import { Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import "../styles/congratsPurchase.css";

export function Congrats() {
    const dispatch = useDispatch()
    const params = useParams()
    const user = useSelector(store => store.storeUser.userReducer.user)
    const idPlan = params.idPlan
    const [success, setSuccess] = useState(false);
    const [planExist, setPlanExist] = useState(false);
    console.log(user)

    useEffect(() => {
        if (user) {
            setSuccess(true);
        }

    }, [user]);

    useEffect(() => {
        if (user && idPlan) {
            const existingPlan = user.planesSuscrip.find(plan => plan._id === idPlan);
            setPlanExist(existingPlan !== undefined);
            dispatch(userActions.SuscripcionPlan(idPlan, user));
        }
    }, []);
    
    if (success) {
        if (!planExist) {
            return (
                <Box className="mainCongrats">
                    <div className="containerCongrats">
                        <Typography
                            variant="h4"
                            align="center"
                            style={{
                                marginBottom: '20px',
                                color: '#333', // Cambia el color de la fuente según tus necesidades
                                fontFamily: 'rubik, Arial, sans-serif', // Cambia la fuente según tus necesidades
                            }}
                        >
                            Congratulations on subscribing to the medical plan!
                        </Typography>

                        <Typography
                            variant="body1"
                            align="center"
                            style={{
                                marginBottom: '20px',
                                color: '#555', // Cambia el color de la fuente según tus necesidades
                                fontFamily: 'Arial, sans-serif', // Cambia la fuente según tus necesidades
                            }}
                        >
                            Welcome to our healthcare service!
                        </Typography>

                        <Button
                            variant="contained"
                            color="primary"
                            component={Link}
                            to="/home"
                            style={{
                                padding: "12px",
                                marginTop: '20px',
                                backgroundColor: '#1976D2', // Cambia el color de fondo del botón según tus necesidades
                                // Cambia el color de la fuente del botón según tus necesidades
                            }}
                        >
                            Go to home
                        </Button>
                    </div>
                </Box>
            );
        } else {
            return (
                <Box className="mainCongrats">
                    <div className="containerCongrats">
                        <Typography
                            variant="h4"
                            align="center"
                            style={{
                                marginBottom: '20px',
                                color: '#FF0000', // Color para indicar error
                                fontFamily: 'rubik, Arial, sans-serif',
                            }}
                        >
                            You are already subscribed to this plan!
                        </Typography>
                        <Button
                            variant="contained"
                            color="primary"
                            component={Link}
                            to="/reservations"
                            style={{
                                padding: "12px",
                                marginTop: '20px',
                                backgroundColor: '#1976D2', // Cambia el color de fondo del botón según tus necesidades
                                // Cambia el color de la fuente del botón según tus necesidades
                            }}
                        >
                            Back
                        </Button>
                    </div>
                </Box>
            );
        }
    } else {
        return (
            <Box className="mainCongrats">
                <div className="containerCongrats">
                    <Typography
                        variant="h4"
                        align="center"
                        style={{
                            maxWidth:'900px',
                            marginBottom: '20px',
                            color: '#FF0000', // Color para indicar error
                            fontFamily: 'rubik, Arial, sans-serif',
                        }}
                    >
                        You must be registered, if you already have an account, log in or create a new one to be able to subscribe to a plan!
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        component={Link}
                        to="/signUp"
                        style={{
                            padding: "12px",
                            marginTop: '20px',
                            backgroundColor: '#1976D2', // Cambia el color de fondo del botón según tus necesidades
                            // Cambia el color de la fuente del botón según tus necesidades
                        }}
                    >
                        Sign up
                    </Button>
                </div>
            </Box>
        );
    }
}


//     useEffect(() => {
//         dispatch(userActions.SuscripcionPlan(idPlan, user))
//     }, [])

//     return (
//         <Box className="mainCongrats">
//             <div className="containerCongrats">
//                 <Typography
//                     variant="h4"
//                     align="center"
//                     style={{
//                         marginBottom: '20px',
//                         color: '#333', // Cambia el color de la fuente según tus necesidades
//                         fontFamily: 'rubik, Arial, sans-serif', // Cambia la fuente según tus necesidades
//                     }}
//                 >
//                     Congratulations on subscribing to the medical plan!
//                 </Typography>

//                 <Typography
//                     variant="body1"
//                     align="center"
//                     style={{
//                         marginBottom: '20px',
//                         color: '#555', // Cambia el color de la fuente según tus necesidades
//                         fontFamily: 'Arial, sans-serif', // Cambia la fuente según tus necesidades
//                     }}
//                 >
//                     Welcome to our healthcare service!
//                 </Typography>

//                 <Button
//                     variant="contained"
//                     color="primary"
//                     component={Link}
//                     to="/home"
//                     style={{
//                         padding: "12px",
//                         marginTop: '20px',
//                         backgroundColor: '#1976D2', // Cambia el color de fondo del botón según tus necesidades
//                         // Cambia el color de la fuente del botón según tus necesidades
//                     }}
//                 >
//                     Go to home
//                 </Button>
//             </div>
//         </Box>
//     )
// }