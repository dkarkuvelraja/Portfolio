import { useRef } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Chip,
  Stack,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { GitHub, Launch, CheckCircle } from '@mui/icons-material';
import { motion, useInView } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';

const projects = [
  {
    title: 'QMarket',
    subtitle: 'SaaS Marketplace Platform',
    description:
      'A full-featured multi-vendor marketplace platform built for SaaS, enabling vendors to list products, manage orders, and handle payments with a robust admin panel.',
    tech: ['Node.js', 'Express', 'MySQL', 'React', 'Redis', 'GraphQL'],
    features: [
      'Multi-vendor marketplace with role-based access',
      'Payment gateway integration (Stripe/Razorpay)',
      'Real-time order tracking & notifications',
      'Admin dashboard with analytics',
    ],
    github: 'https://github.com/dkarkuvelraja',
    gradient: 'linear-gradient(135deg, #6C63FF20, #00D9FF10)',
    accentColor: '#6C63FF',
  },
  {
    title: 'Task Management System',
    subtitle: '.NET + React Full Stack App',
    description:
      'A Jira-lite task management application built with ASP.NET Core and React, following Clean Architecture principles for enterprise-grade maintainability.',
    tech: ['ASP.NET Core', 'React', 'MySQL', 'Clean Architecture', 'REST API'],
    features: [
      'CRUD operations with drag-and-drop boards',
      'User authentication with JWT',
      'Real-time task status updates',
      'Clean Architecture pattern implementation',
    ],
    github: 'https://github.com/dkarkuvelraja/Task_management',
    gradient: 'linear-gradient(135deg, #7B74FF20, #4DD0E110)',
    accentColor: '#7B74FF',
  },
  {
    title: 'Zodeak',
    subtitle: 'Crypto Exchange Backend',
    description:
      'A cryptocurrency exchange backend system handling secure trading, wallet management, and real-time market data with high-performance APIs.',
    tech: ['Node.js', 'Express', 'MongoDB', 'Redis', 'WebSocket', 'JWT'],
    features: [
      'Secure crypto wallet management',
      'Real-time market data via WebSocket',
      'KYC/AML compliance integration',
      'High-performance trade matching engine',
    ],
    github: 'https://github.com/dkarkuvelraja',
    gradient: 'linear-gradient(135deg, #00D9FF20, #6C63FF10)',
    accentColor: '#00D9FF',
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <SectionWrapper
      id="projects"
      title="Projects"
      subtitle="Some of my recent work that I'm proud of"
    >
      <Box ref={ref}>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={project.title}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                style={{ height: '100%' }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      boxShadow: (theme) =>
                        `0 20px 60px ${project.accentColor}25`,
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 4,
                      background: project.gradient.replace('20', '').replace('10', ''),
                    },
                  }}
                >
                  {/* Card Header Decoration */}
                  <Box
                    sx={{
                      background: project.gradient,
                      p: 3,
                      pb: 2,
                    }}
                  >
                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 0.5 }}>
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: project.accentColor, fontWeight: 600 }}
                    >
                      {project.subtitle}
                    </Typography>
                  </Box>

                  <CardContent sx={{ flexGrow: 1, pt: 2 }}>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 2, lineHeight: 1.7 }}
                    >
                      {project.description}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{ fontWeight: 600, mb: 1 }}
                    >
                      Key Features:
                    </Typography>
                    <List dense disablePadding sx={{ mb: 2 }}>
                      {project.features.map((feature) => (
                        <ListItem key={feature} disableGutters sx={{ py: 0.3 }}>
                          <ListItemIcon sx={{ minWidth: 28 }}>
                            <CheckCircle
                              sx={{ fontSize: 16, color: project.accentColor }}
                            />
                          </ListItemIcon>
                          <ListItemText
                            primary={feature}
                            primaryTypographyProps={{
                              variant: 'body2',
                              color: 'text.secondary',
                              fontSize: '0.82rem',
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>

                    <Stack direction="row" flexWrap="wrap" gap={0.8}>
                      {project.tech.map((t) => (
                        <Chip
                          key={t}
                          label={t}
                          size="small"
                          sx={{
                            fontSize: '0.72rem',
                            backgroundColor: `${project.accentColor}15`,
                            color: project.accentColor,
                            border: `1px solid ${project.accentColor}30`,
                          }}
                        />
                      ))}
                    </Stack>
                  </CardContent>

                  <CardActions sx={{ p: 2, pt: 0 }}>
                    <Button
                      size="small"
                      startIcon={<GitHub />}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: 'text.secondary',
                        '&:hover': { color: 'primary.main' },
                      }}
                    >
                      Source Code
                    </Button>
                  </CardActions>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </SectionWrapper>
  );
};

export default Projects;
