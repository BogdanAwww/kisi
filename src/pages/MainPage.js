import React from 'react';
import { Box } from '@material-ui/system';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      gap="20px"
      fontSize="200%">
      <Link to="/groups">Groups</Link>
      <Link to="/histogram">Histogram</Link>
    </Box>
  );
};

export default MainPage;
