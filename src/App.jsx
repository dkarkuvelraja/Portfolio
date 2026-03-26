import { useState, useMemo, useCallback } from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import getTheme from './theme';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);

  const theme = useMemo(() => getTheme(darkMode ? 'dark' : 'light'), [darkMode]);
  const toggleDarkMode = useCallback(() => setDarkMode((prev) => !prev), []);
  const handleLoadingComplete = useCallback(() => setLoading(false), []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {loading && <LoadingScreen onComplete={handleLoadingComplete} />}
      <Box
        sx={{
          opacity: loading ? 0 : 1,
          transition: 'opacity 0.6s ease',
        }}
      >
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
