import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetDoctors } from "../service/doctorService.js";
import { Box, Grid, Paper, Button, Typography, Divider, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link as LinkRouter } from 'react-router-dom'


function PlansDoctor() {
  const params = useParams()
  const [plans, setPlans] = useState([])
  const [doctor, setDoctor] = useState({})

  useEffect(() => {
    const fechData = async () => {
      try {
        const doctores = await GetDoctors();
        const elegido = doctores.filter(doctor => doctor._id === params.string)[0]
        const planesDoctor = elegido.plan

        setPlans(planesDoctor)
        setDoctor(elegido)
      } catch (err) {
        console.log("Error loading doctors ")
      }
    }
    fechData()
    // eslint-disable-next-line 
  }, [])
  const doctorData = {
    fullName : doctor.name + " " + doctor.lastName,
    email: doctor.email
  }

  return (
    <Grid container spacing={3}>
      {/* Información del Doctor */}
      <Grid item xs={12} md={4}>
        <Paper style={{ padding: '20px', height: '100%', backgroundColor: '#f5f5f5' }}>
          <Typography variant="h5" gutterBottom style={{ color: '#333333' }}>
            Doctor's Information
          </Typography>
          <Typography variant="body1" style={{ marginBottom: '10px', color: '#555555' }}>
            Name: {doctorData.fullName || 'Not available'}
          </Typography>
          <Typography variant="body1" style={{ marginBottom: '10px', color: '#555555' }}>
            Email: {doctorData.email || 'Not available'}
          </Typography>
          <Divider />
        </Paper>
      </Grid>

      {/* Lista de Planes */}
      <Grid item xs={12} md={8}>
        <Paper style={{ padding: '20px', height: '100%', backgroundColor: '#DCE8E8' }}>
          <Typography variant="h5" gutterBottom style={{ color: '#007bff', marginBottom: '20px' }}>
            Available Plans
          </Typography>
          {plans.length > 0 ? (
            <List>
              {plans.map((plan, index) => (
                <React.Fragment key={index}>
                  <ListItem>
                    <ListItemText
                      primary={
                        <>
                          <Typography variant="h6" style={{ color: '#007bff' }}>
                            {plan.planName}
                          </Typography>
                          <Divider orientation="vertical" flexItem style={{ margin: '0 10px' }} />
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            style={{ marginBottom: '10px', color: '#555555' }}
                          >
                            {plan.coverage}
                          </Typography>
                        </>
                      }
                      secondary={
                        <>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            style={{ marginBottom: '10px', color: '#555555' }}
                          >
                            Description: {plan.description}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            style={{ marginBottom: '10px', color: '#555555' }}
                          >
                            Cost: {plan.cost}
                          </Typography>
                          <LinkRouter to={`/congratsPurchase/${plan._id}`}>
                            <Button variant="contained" color="primary">
                              Buy Plan
                            </Button>
                          </LinkRouter>
                        </>
                      }
                    />
                  </ListItem>
                  {index < plans.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </List>
          ) : (
            <Typography variant="body1">No plans available for this doctor.</Typography>
          )}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default PlansDoctor;