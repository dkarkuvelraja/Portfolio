import { useRef } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion, useInView } from 'framer-motion';

const SectionWrapper = ({ id, title, subtitle, children, maxWidth = 'lg' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <Box
      id={id}
      component="section"
      ref={ref}
      sx={{
        py: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth={maxWidth}>
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 7 } }}>
              <Typography
                variant="h2"
                sx={{
                  position: 'relative',
                  display: 'inline-block',
                  mb: 2,
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -8,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 60,
                    height: 4,
                    borderRadius: 2,
                    background: (theme) =>
                      `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  },
                }}
              >
                {title}
              </Typography>
              {subtitle && (
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ mt: 2, maxWidth: 600, mx: 'auto' }}
                >
                  {subtitle}
                </Typography>
              )}
            </Box>
          </motion.div>
        )}
        {children}
      </Container>
    </Box>
  );
};

export default SectionWrapper;
