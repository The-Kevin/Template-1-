import React from 'react';
import GlobalStyles from './styles/globalStyles';


import Header from './components/Header';
import Menu from './components/Nav/Menu';
import Routes from './Routes';

import { ThemeProvider } from 'styled-components';


const cores = {
    corHeader: '#0B1726',
    corLateral: '#111E6C',
    corFundo: '#F5F5F5',
    corFraca: '#ADD8E6'
}

function App() {

  return (
    <ThemeProvider theme={cores}>
      <Header />
      <Menu />
      <Routes />
      <GlobalStyles />
    </ThemeProvider>
   
  );
}

export default App;
