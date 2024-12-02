import React from 'react';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { Paper, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';

const ExperienceTimeline = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const experiences = [
    {
      title: "Développeur Full Stack Senior",
      company: "Tech Innovation",
      period: "2022 - Présent",
      description: "Développement d'applications web complexes utilisant React, Node.js et AWS",
      type: "work"
    },
    {
      title: "Développeur Frontend",
      company: "Digital Solutions",
      period: "2020 - 2022",
      description: "Création d'interfaces utilisateur modernes avec React et Material-UI",
      type: "work"
    },
    {
      title: "Master en Développement Web",
      company: "École d'Ingénierie Numérique",
      period: "2018 - 2020",
      description: "Spécialisation en développement web et architectures modernes",
      type: "education"
    }
  ];

  return (
    <Box ref={ref} sx={{ py: 4 }}>
      <Timeline position="alternate">
        {experiences.map((experience, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <TimelineDot color="primary">
                  {experience.type === 'work' ? <WorkIcon /> : <SchoolIcon />}
                </TimelineDot>
              </motion.div>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
                  <Typography variant="h6" component="h3" color="primary.main">
                    {experience.title}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {experience.company}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    {experience.period}
                  </Typography>
                  <Typography variant="body1">
                    {experience.description}
                  </Typography>
                </Paper>
              </motion.div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
};

export default ExperienceTimeline;