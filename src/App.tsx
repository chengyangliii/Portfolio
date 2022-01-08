import React, { useState }  from 'react';
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
import Portfolio_Image from "./Portfolio_Image.png";
import Exam_Image from "./Online_Exam.png";

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

export interface ExperienceInterface{
  experience: {
    position: string
    period: string
    company: string
    academic?: boolean | undefined
  }[]
}

export interface projectsInterface {
  projects: {
    title: string
    desc: string
    image?: string
    websiteLink?: string
    githubLink?: string
  }[]
}

const App = () => {

  const [experience, setExperience] = useState<ExperienceInterface['experience']>([
    {
      position: 'Full Stack Developer',
      period: 'May 2021 - Aug 2021',
      company: 'Elections Canada, QC, Canada'
    },
    {
      position: 'Full Stack Developer',
      period: 'Sep 2020 - Dec 2020',
      company: 'University of Ottawa, ON, Canada'
    },
    {
      position: 'Software Developer',
      period: 'Jan 2020 - Apr 2020',
      company: 'House of Commons, ON, Canada'
    },
    {
      position: 'Computer Science',
      period: 'Sep 2017 - Dec 2021',
      company: 'University of Ottawa, Ottawa, ON',
      academic: true
    }
  ])

  const [projects, setProjects] = useState<projectsInterface['projects']>([
    {
      image: Portfolio_Image,
      title: 'Personal Website',
      desc: 'TypeScript for cenhancing code manageability and catching bugs early at compile time. \n' +
            'React for component-based, declarative UI development. \n' +
            'Styled-components for modular, scoped and dynamic CSS styling',
      githubLink: 'https://github.com/chengyangliii/portfolio/tree/master'
    },
    {
      image: Exam_Image,
      title: 'Exam System Web App',
      desc: 'Implemented a RESTful backend with Node.js, Express Built frontend with React, React Hooks Managed states with Redux, React-Redux Stored data in MongoBD Atlas Styled UI by Bootstrap, Materialize, React-Bootstrap.',
      githubLink: 'https://github.com/chengyangliii/MERN-Web-App'
    }
    
  ])  

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
        fontWeight: 400
      },
      h6: {
        fontSize: '1.25rem',
        fontWeight: 600
      },
      h5: {
        fontSize: '1.5rem',
        fontWeight: 700
      },
      h4: {
        fontSize: '2.0rem',
        fontWeight: 800
        
      },
      h3: {
        fontSize: '3rem',
        fontWeight: 900
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
          <Experience experience={ experience }/>
          <Projects projects={ projects }/>
          <BottomNavigation />
        </ThemeProvider>
      </Box>
    </ThemeProvider>
  );
}

export default App