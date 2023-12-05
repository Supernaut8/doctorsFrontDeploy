import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepPurple } from '@mui/material/colors';

export default function LetterAvatars( {username} ) {

  const initials = (username.split(" ")).map(word => word[0].toUpperCase()).join("")

  return (
    <Stack direction="row" spacing={2}>
      <Avatar sx={{ height:'100px', width:'100px',bgcolor: deepPurple[500] }}>{initials}</Avatar>
    </Stack>
  );
}