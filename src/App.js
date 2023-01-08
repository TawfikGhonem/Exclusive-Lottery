import './App.css';
import Navbar from './components/Navbar/Navbar';
import React from 'react';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Tickets from './components/Tickets/Tickets';
import Contact from './components/Contact/Contact';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <div className="App">
        <Navbar />
        <Home />
        <About />
        <Tickets />
        <Contact />
        <Footer />
    </div>
    </ThemeProvider>
    
  );
}

export default App;
