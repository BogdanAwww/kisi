import React from 'react';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Container, Box } from '@material-ui/core';
import FirstTask from './components/FirstTask';
import { store } from './store';

function App() {

  return (
      <Provider store={store}>
        <Box mt={10}>
         <Container >
           <CssBaseline />
           <FirstTask></FirstTask>
         </Container>
        </Box>
      </Provider>
  );
}

export default App;
