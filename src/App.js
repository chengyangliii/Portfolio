import React, { useState }  from 'react';
// import Header from './components/Header/Header';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import BottomNavigation from './components/BottomNavigation/BottomNavigation';
import { 
  AppBar, 
  Container, 
  Typography,
  Switch,
  Box
} from '@material-ui/core';
import './App.css';
import {
  ThemeProvider,
  createTheme,
  styled
} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import { green, yellow, indigo } from '@material-ui/core/colors';

const Header = styled(AppBar)({
  padding: '16px 0',
  background: 'transparent',
})

const MyContainer = styled(Container)({
  display: 'flex',
  flexFlow: 'row nowrap',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export default function App() {

  const [darkState, setDarkState] = useState(true);
  const palletType = darkState ? "dark" : "light";
  const mainPrimaryColor = darkState ? green[500] : green[900]; 
  const mainSecondaryColor = darkState ? green[50] : green[600]; 
  const backgroungPrimaryColor = darkState ? '#000a03' : green[50]; 
  const backgroungSecondaryColor = darkState ? yellow[300] : indigo[300];

  const outerTheme = createTheme({
    palette: {
      type: palletType,
      primary: {
        main: backgroungPrimaryColor,
      },
      secondary: {
        main: backgroungSecondaryColor,
      }
    }
  })

  const theme = createTheme({
    palette: {
      type: palletType,
      primary: {
        main: mainPrimaryColor,
      },
      secondary: {
        main: mainSecondaryColor,
      }
    },
    typography: {
      fontFamily: [
        'Nunito',
        'Play',
        'Roboto',
        'sans-serif',
        '-apple-system',
      ].join(','),
  
      body1: {
        fontSize: '16px',
        fontWeight: '400'
      },
      h6: {
        fontSize: '1.25rem',
        fontWeight: '600'
      },
      h5: {
        fontSize: '1.5rem',
        fontWeight: '700',
      },
      h4: {
        fontSize: '2.0rem',
        fontWeight: '800'
      },
      h3: {
        fontSize: '3rem',
        fontWeight: '900'
      },
    },
  })
  
  const handleThemeChange = () => {
    setDarkState(!darkState);
  };


  return (
    <ThemeProvider theme={outerTheme}>
      <Box bgcolor = 'primary.main'>
        <ThemeProvider theme={ theme }>
          <CssBaseline />
          <Header className='headerBar'>
                <MyContainer maxWidth='lg' className='header-container' color='secondary'>
                    <Typography variant='h4' color='primary' >
                        Chengyang Li
                    </Typography>
                    <Switch checked={darkState} icon={<Brightness7Icon/>} checkedIcon={<Brightness2Icon/>} onChange={handleThemeChange} />
                </MyContainer>
            </Header>
          <About />
          <Experience />
          <Projects />
          <BottomNavigation />
        </ThemeProvider>
      </Box>
    </ThemeProvider>
  );
}

