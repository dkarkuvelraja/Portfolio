import { useRef } from 'react';
import { Box, Typography, Chip, Stack } from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from '@mui/lab';
import { Work, School } from '@mui/icons-material';
import { motion, useInView } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';

const experiences = [
  {
    title: 'Junior Node.js Developer',
    company: 'Trioangle Technologies',
    period: 'Nov 2024 – Present',
    icon: <Work />,
    color: 'primary',
    achievements: [
      'Developed and maintained scalable REST APIs using Node.js and Express',
      'Built SaaS marketplace features with multi-tenant architecture',
      'Integrated third-party payment gateways for secure transactions',
      'Collaborated with cross-functional teams on agile projects',
      'Optimized database queries for improved API performance',
    ],
    tech: ['Node.js', 'Express', 'MySQL', 'Redis', 'GraphQL'],
  },
  {
    title: 'Trainee Node.js Developer',
    company: 'InnBlockchain',
    period: 'Nov 2023 – Nov 2024',
    icon: <School />,
    color: 'secondary',
    achievements: [
      'Contributed to crypto exchange backend development (Zodeak)',
      'Implemented authentication systems with JWT and role-based access',
      'Built RESTful APIs for blockchain-based applications',
      'Worked with MongoDB and MySQL for data management',
      'Gained expertise in payment integration and security best practices',
    ],
    tech: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Blockchain'],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <SectionWrapper
      id="experience"
      title="Experience"
      subtitle="My professional journey so far"
    >
      <Box ref={ref}>
        <Timeline
          position="alternate"
          sx={{
            px: { xs: 0, md: 4 },
            '& .MuiTimelineItem-root:before': {
              display: { xs: 'none', md: 'block' },
            },
          }}
        >
          {experiences.map((exp, index) => (
            <TimelineItem key={exp.company}>
              <TimelineOppositeContent
                sx={{
                  display: { xs: 'none', md: 'block' },
                  m: 'auto 0',
                }}
              >
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Typography variant="body2" color="text.secondary" fontWeight={600}>
                    {exp.period}
                  </Typography>
                </motion.div>
              </TimelineOppositeContent>

              <TimelineSeparator>
                <TimelineConnector
                  sx={{
                    bgcolor: index === 0 ? 'primary.main' : 'divider',
                    width: 3,
                  }}
                />
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.1 }}
                >
                  <TimelineDot
                    color={exp.color}
                    variant="outlined"
                    sx={{
                      p: 1.5,
                      borderWidth: 3,
                    }}
                  >
                    {exp.icon}
                  </TimelineDot>
                </motion.div>
                <TimelineConnector
                  sx={{
                    bgcolor: index === experiences.length - 1 ? 'divider' : 'primary.main',
                    width: 3,
                  }}
                />
              </TimelineSeparator>

              <TimelineContent sx={{ py: 3 }}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Box
                    sx={{
                      p: 3,
                      borderRadius: 3,
                      backgroundColor: 'background.paper',
                      border: (theme) => `1px solid ${theme.palette.divider}`,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: 'primary.main',
                        boxShadow: (theme) =>
                          `0 8px 30px ${theme.palette.primary.main}15`,
                      },
                    }}
                  >
                    <Typography
                      variant="body2"
                      color="primary.main"
                      sx={{
                        display: { xs: 'block', md: 'none' },
                        mb: 1,
                        fontWeight: 600,
                      }}
                    >
                      {exp.period}
                    </Typography>
                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 0.5 }}>
                      {exp.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="primary.main"
                      sx={{ fontWeight: 600, mb: 2 }}
                    >
                      {exp.company}
                    </Typography>

                    <Box component="ul" sx={{ pl: 2.5, mb: 2 }}>
                      {exp.achievements.map((achievement) => (
                        <Typography
                          component="li"
                          variant="body2"
                          color="text.secondary"
                          key={achievement}
                          sx={{ mb: 0.8, lineHeight: 1.6 }}
                        >
                          {achievement}
                        </Typography>
                      ))}
                    </Box>

                    <Stack direction="row" flexWrap="wrap" gap={1}>
                      {exp.tech.map((t) => (
                        <Chip
                          key={t}
                          label={t}
                          size="small"
                          variant="outlined"
                          color="primary"
                          sx={{ fontSize: '0.75rem' }}
                        />
                      ))}
                    </Stack>
                  </Box>
                </motion.div>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Box>
    </SectionWrapper>
  );
};

export default Experience;
