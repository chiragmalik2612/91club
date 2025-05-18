import { Box, Typography } from '@mui/material';
import React from 'react';

const Navbar = () => {
  return (
    <Box
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: 10,
        p: 2,
        bgcolor: '#1976d2',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <Typography variant="h6">Navbar</Typography>
    </Box>
  );
};

export default Navbar;
