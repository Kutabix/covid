import React, { useEffect, useState } from 'react'
import Logo from './components/Logo'
import CardComponent from './components/Cards'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/';
import CountryForm from './components/Country'

const theme = createMuiTheme({
  typography: {
      fontFamily: 'Montserrat'
  },
});

function App() {
  const [covData, setCovData] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const url = 'https://covid19.mathdro.id/api';
      const data = await (await fetch(url)).json();
      setCovData(data);
    }
    fetchData();
  }, []);

  return (
    <MuiThemeProvider theme={theme}>
      <Logo />
      { covData ? <CardComponent data={covData} /> : '' }
      <CountryForm />
    </MuiThemeProvider>
  )
}

export default App