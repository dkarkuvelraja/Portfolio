import { Box, Container, Typography, Button, Stack, Chip } from '@mui/material';
import { ArrowForward, Email } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <Box
      id="hero"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        pt: 8,
      }}
    >
      {/* Background decoration */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          right: '-5%',
          width: { xs: 300, md: 500 },
          height: { xs: 300, md: 500 },
          borderRadius: '50%',
          background: (theme) =>
            `radial-gradient(circle, ${theme.palette.primary.main}15, transparent 70%)`,
          filter: 'blur(60px)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '10%',
          left: '-5%',
          width: { xs: 200, md: 400 },
          height: { xs: 200, md: 400 },
          borderRadius: '50%',
          background: (theme) =>
            `radial-gradient(circle, ${theme.palette.secondary.main}12, transparent 70%)`,
          filter: 'blur(60px)',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ maxWidth: 800 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Chip
              label="Available for opportunities"
              color="primary"
              variant="outlined"
              size="small"
              sx={{ mb: 3, fontWeight: 500 }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Typography variant="h1" sx={{ mb: 1 }}>
              Hi, I'm{' '}
              <Box
                component="span"
                sx={{
                  background: (theme) =>
                    `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                Karkuvel Raja
              </Box>
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Typography
              variant="h3"
              color="text.secondary"
              sx={{ mb: 3, fontWeight: 400, minHeight: { xs: 70, md: 50 } }}
            >
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  2000,
                  'Node.js Developer',
                  2000,
                  '.NET Developer',
                  2000,
                  'React Developer',
                  2000,
                  'Backend Engineer',
                  2000,
                ]}
                wrapper="span"
                speed={40}
                repeat={Infinity}
                cursor={true}
              />
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ mb: 5, fontWeight: 400, lineHeight: 1.6, maxWidth: 650 }}
            >
              Building scalable backend systems & modern web apps
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowForward />}
                onClick={() => {
                  const el = document.querySelector('#projects');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                sx={{
                  px: 4,
                  py: 1.5,
                  background: (theme) =>
                    `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                  '&:hover': {
                    background: (theme) =>
                      `linear-gradient(135deg, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                View Projects
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<Email />}
                onClick={() => {
                  const el = document.querySelector('#contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                sx={{
                  px: 4,
                  py: 1.5,
                  borderWidth: 2,
                  '&:hover': {
                    borderWidth: 2,
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Contact Me
              </Button>
            </Stack>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
