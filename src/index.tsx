import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@mui/material';
import { ConfigProvider } from 'antd';

import './index.less';
import './assets/scss/custom.scss';

const muiTheme = createTheme({
  palette: {
    primary: {
      main: '#0073b6',
    },
    secondary: {
      main: '#008ad9',
    },
    // secondary: {
    //   light: '#ff7961',
    //   main: '#f44336',
    //   dark: '#ba000d',
    //   contrastText: '#000',
    // },
  },
});

const antdTheme = {
  token: {
    colorPrimary: '#0073b6',
    colorSecondary: '#008ad9',
    borderRadius: 3,
    fontFamily: '"Assistant", sans-serif',
  },
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={muiTheme}>
      <ConfigProvider theme={antdTheme}>
          <App />
      </ConfigProvider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
