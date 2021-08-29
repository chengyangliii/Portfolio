import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  ThemeProvider,
  createTheme
} from '@material-ui/core/styles'
import { green } from '@material-ui/core/colors'

const theme = createTheme({
  palette: {
    primary: {
      main: green[500],
    },
    secondary: {
      main: green[50],
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

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={ theme }>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
