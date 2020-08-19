import React from 'react';
import GlobalStyles from './styles/globalStyles';


import Header from './components/Header';
import Menu from './components/Nav/Menu';
import Routes from './Routes';

import { ThemeProvider } from 'styled-components';


const cores = {
    corHeader: '#0D0D0D',
    corLateral: '#262526',
    corFundo: '#D9D9D9'
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
