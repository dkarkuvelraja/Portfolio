import { useRef } from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import { Api, Payment, Security, Cloud } from '@mui/icons-material';
import { motion, useInView } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';

const strengths = [
  {
    icon: <Api sx={{ fontSize: 40 }} />,
    title: 'API Development',
    description: 'Building robust RESTful & GraphQL APIs with Node.js, Express, and ASP.NET Core.',
  },
  {
    icon: <Cloud sx={{ fontSize: 40 }} />,
    title: 'SaaS Platforms',
    description: 'Architecting multi-tenant SaaS solutions with scalable database designs.',
  },
  {
    icon: <Payment sx={{ fontSize: 40 }} />,
    title: 'Payment Systems',
    description: 'Integrating payment gateways and handling secure financial transactions.',
  },
  {
    icon: <Security sx={{ fontSize: 40 }} />,
    title: 'Authentication',
    description: 'Implementing secure auth systems with JWT, OAuth, and role-based access.',
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <SectionWrapper
      id="about"
      title="About Me"
      subtitle="Get to know my background and what drives me"
    >
      <Box ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Box
            sx={{
              maxWidth: 800,
              mx: 'auto',
              mb: 6,
              textAlign: 'center',
            }}
          >
            <Typography variant="body1" color="text.secondary" sx={{ mb: 2, lineHeight: 1.8 }}>
              I am a <strong>backend-focused Full Stack Developer</strong> with 2+ years of
              experience building production-grade applications. My expertise spans{' '}
              <strong>Node.js, Express, ASP.NET Core, GraphQL, and MySQL</strong>, with a strong
              focus on creating scalable, maintainable systems.
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
              I've contributed to <strong>SaaS platforms</strong> and{' '}
              <strong>blockchain-based applications</strong>, delivering features like payment
              integrations, multi-tenant architectures, and real-time APIs. I also build clean,
              responsive frontends using <strong>React</strong>.
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={3}>
          {strengths.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={item.title}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                style={{ height: '100%' }}
              >
                <Card
                  sx={{
                    height: '100%',
                    textAlign: 'center',
                    p: 1,
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      borderColor: 'primary.main',
                      boxShadow: (theme) =>
                        `0 12px 40px ${theme.palette.primary.main}20`,
                    },
                  }}
                >
                  <CardContent>
                    <Box
                      sx={{
                        mb: 2,
                        color: 'primary.main',
                        display: 'flex',
                        justifyContent: 'center',
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </SectionWrapper>
  );
};

export default About;
