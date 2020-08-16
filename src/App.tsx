import React from 'react';
import GlobalStyles from './styles/globalStyles';

import data from './data';

import Header from './components/Header';
import Section from './components/Section';
import Img from './components/Imgs';
import Menu from './components/Nav/Menu';

import { ThemeProvider } from 'styled-components';


const cores = {
    corHeader: '#0B1726',
    corLateral: '#2E4159',
    corFundo: '#F5F5F5'
}

function App() {

  return (
    <ThemeProvider theme={cores}>
      <Header />
      <Menu />
        <Img />

        <Section 
          title={data[0].title}
          text={data[0].text}
        />
        <Img />
        <Section 
          title={data[1].title}
          text={data[1].text}
        />
      <GlobalStyles />
    </ThemeProvider>
   
  );
}

export default App;
