import { Container, Box } from "@material-ui/core";
import * as React from 'react';
import {createTheme,ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RecentRequest from "./screens/recent-request";
import ProfilePage from "./screens/Profile-page";
import Nav from "./components/nav";

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
          <Route path='/Recent-Requests' element={<RecentRequest />} />
          <Route path='/Profile' element={<ProfilePage />} />
        </Routes>
          </Container>
      </ThemeProvider>
    </BrowserRouter>
    </>
  );
}

export default App;
