import type { NextPage } from 'next'
import Head from 'next/head'
import {Footer, Nav} from '../components/general'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {DrawerLeft} from '../components/reusable'
// import styles from '../styles/'
const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#0E0E0E',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#9A6728',
    },
  },
});
const Home: NextPage = () => {

  return (
    <ThemeProvider theme={theme}>
      <div className='flex flex-col justify-between overflow-hidden' style={{minHeight:'100vh'}}>
        <Head>
          <meta charSet='UTF-8'/>
          <meta name='viewport' content='width=device-width, initial-scale=1.0' />
          <meta httpEquiv='X-UA-Compatible' content='ie=edge'/>
          <title>LiveWitch</title>
          <meta name="description" content="welcome page - LiveWitch  watch and enjoy" />
          <meta name='keywords' content='live stream streaming watch signup singin'/>
          <meta name='author' content='Abdelhalim Ben Oun' />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Nav/>
        <DrawerLeft>
          <section className='bg-back'>d</section>
        </DrawerLeft>
          <Footer/>
      </div>
    </ThemeProvider>
  )
}

export default Home
