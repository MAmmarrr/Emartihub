import { Container, Box } from "@material-ui/core";
import * as React from 'react';
import {createTheme,ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import RecentRequest from "./screens/recent-request";
import ProfilePage from "./screens/Profile-page";
import Nav from "./components/nav";
import BasicModal from "./components/CreateProfileStepper/BaseModalIndex";

const theme = createTheme({
  palette: {
    primary:{
      main:'#fb8500',
    },
    secondary: {
      main: '#023047',
    },
    light: {
      main: "#ffb703",
    },
    bg:{
      main: "#fffcf7",
    }
  },
});

function App() {
  return (
    <>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
          <Container style={{padding:0}}>
            <Nav />
        <Routes>
          <Route exact path='/' element={<Navigate replace to='/Recent-requests'/>} />
          <Route path='Recent-requests' element={<RecentRequest/>} />
          <Route path='/Profile' element={<ProfilePage />} />
          <Route path='/create-gig' element={<BasicModal label={"Create Specialized Profile"} preview={true}/>
          } />
        </Routes>
          </Container>
      </ThemeProvider>
    </BrowserRouter>
    </>
  );
}

export default App;
