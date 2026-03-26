import { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useScrollTrigger,
  Container,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  DarkMode,
  LightMode,
  Download,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 50 });

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={trigger ? 4 : 0}
        sx={{
          backdropFilter: 'blur(20px)',
          backgroundColor: trigger
            ? (theme) =>
                theme.palette.mode === 'dark'
                  ? 'rgba(10, 10, 26, 0.85)'
                  : 'rgba(245, 245, 250, 0.85)'
            : 'transparent',
          borderBottom: trigger
            ? (theme) => `1px solid ${theme.palette.divider}`
            : 'none',
          transition: 'all 0.3s ease',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: 'space-between', py: 0.5 }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography
                variant="h6"
                component="a"
                href="#hero"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#hero');
                }}
                sx={{
                  fontWeight: 800,
                  background: (theme) =>
                    `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  fontSize: '1.4rem',
                  cursor: 'pointer',
                  textDecoration: 'none',
                }}
              >
                {'<KR />'}
              </Typography>
            </motion.div>

            {/* Desktop Nav */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
              {navItems.map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Button
                    onClick={() => handleNavClick(item.href)}
                    sx={{
                      color: 'text.secondary',
                      fontWeight: 500,
                      '&:hover': {
                        color: 'primary.main',
                        backgroundColor: 'rgba(108, 99, 255, 0.08)',
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                </motion.div>
              ))}

              <IconButton onClick={toggleDarkMode} color="primary" sx={{ ml: 1 }}>
                {darkMode ? <LightMode /> : <DarkMode />}
              </IconButton>

              <Button
                variant="outlined"
                color="primary"
                size="small"
                component="a"
                startIcon={<Download />}
                href="/resume.pdf"
                download="Karkuvel_Raja_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ ml: 1, borderRadius: 2 }}
              >
                Resume
              </Button>
            </Box>

            {/* Mobile Hamburger */}
            <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', gap: 1 }}>
              <IconButton onClick={toggleDarkMode} color="primary">
                {darkMode ? <LightMode /> : <DarkMode />}
              </IconButton>
              <IconButton onClick={handleDrawerToggle} color="primary">
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: {
            width: 280,
            backgroundColor: 'background.default',
            pt: 2,
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', px: 2 }}>
          <IconButton onClick={handleDrawerToggle} color="primary">
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navItems.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton onClick={() => handleNavClick(item.href)}>
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{ fontWeight: 500, fontSize: '1.1rem' }}
                />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding>
            <ListItemButton component="a" href="/resume.pdf" download="Karkuvel_Raja_Resume.pdf" target="_blank" rel="noopener noreferrer">
              <Download sx={{ mr: 1, color: 'primary.main' }} />
              <ListItemText
                primary="Download Resume"
                primaryTypographyProps={{ fontWeight: 500 }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
