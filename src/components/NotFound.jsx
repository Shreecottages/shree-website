import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const primary = red[50]; // #f44336

export default function Error() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: primary,
      }}
    >
      <Typography variant="h1" style={{ color: '#3D2521' }}>
        404
      </Typography>
      <Typography variant="h6" style={{ color: '#3D2521' }}>
        The page you’re looking for doesn’t exist.
      </Typography>
      {/* Add the Link component to the home page */}
      <Link to="/">
        <Button variant="contained">Back Home</Button>
      </Link>
    </Box>
  );
}
