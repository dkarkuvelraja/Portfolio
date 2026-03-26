import { useRef } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Stack,
} from '@mui/material';
import {
  Code,
  Storage,
  Dns,
  Build,
  Html,
  Css,
  Javascript,
  DataObject,
} from '@mui/icons-material';
import { motion, useInView } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';

const skillCategories = [
  {
    title: 'Frontend',
    icon: <Code sx={{ fontSize: 32 }} />,
    color: '#61DAFB',
    skills: [
      { name: 'React', icon: '⚛️' },
      { name: 'HTML5', icon: '🌐' },
      { name: 'CSS3', icon: '🎨' },
      { name: 'JavaScript', icon: '💛' },
    ],
  },
  {
    title: 'Backend',
    icon: <Dns sx={{ fontSize: 32 }} />,
    color: '#68A063',
    skills: [
      { name: 'Node.js', icon: '🟢' },
      { name: 'Express.js', icon: '⚡' },
      { name: 'ASP.NET Core', icon: '🟣' },
      { name: 'GraphQL', icon: '◈' },
      { name: 'REST APIs', icon: '🔗' },
    ],
  },
  {
    title: 'Database',
    icon: <Storage sx={{ fontSize: 32 }} />,
    color: '#4479A1',
    skills: [
      { name: 'MySQL', icon: '🐬' },
      { name: 'MongoDB', icon: '🍃' },
    ],
  },
  {
    title: 'Tools & DevOps',
    icon: <Build sx={{ fontSize: 32 }} />,
    color: '#F05032',
    skills: [
      { name: 'Git', icon: '🔀' },
      { name: 'Redis', icon: '🔴' },
      { name: 'AWS', icon: '☁️' },
      { name: 'Postman', icon: '📮' },
      { name: 'Jenkins', icon: '🔧' },
    ],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <SectionWrapper
      id="skills"
      title="Skills & Technologies"
      subtitle="Technologies I work with to build modern applications"
    >
      <Box ref={ref}>
        <Grid container spacing={3}>
          {skillCategories.map((category, index) => (
            <Grid size={{ xs: 12, sm: 6 }} key={category.title}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                style={{ height: '100%' }}
              >
                <Card
                  sx={{
                    height: '100%',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      boxShadow: (theme) =>
                        `0 12px 40px ${category.color}20`,
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 4,
                      background: `linear-gradient(90deg, ${category.color}, ${category.color}80)`,
                    },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 3 }}>
                      <Box sx={{ color: category.color }}>{category.icon}</Box>
                      <Typography variant="h5" sx={{ fontWeight: 600 }}>
                        {category.title}
                      </Typography>
                    </Stack>

                    <Stack direction="row" flexWrap="wrap" gap={1.5}>
                      {category.skills.map((skill, skillIdx) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{
                            duration: 0.3,
                            delay: index * 0.15 + skillIdx * 0.05 + 0.3,
                          }}
                        >
                          <Chip
                            label={`${skill.icon} ${skill.name}`}
                            variant="outlined"
                            sx={{
                              fontSize: '0.9rem',
                              py: 2.5,
                              px: 0.5,
                              borderColor: `${category.color}40`,
                              '&:hover': {
                                backgroundColor: `${category.color}15`,
                                borderColor: category.color,
                                transform: 'scale(1.05)',
                              },
                              transition: 'all 0.3s ease',
                            }}
                          />
                        </motion.div>
                      ))}
                    </Stack>
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

export default Skills;
