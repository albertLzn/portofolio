import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import SkillsList from '../components/skills/SkillList';
import ExperienceTimeline from '../components/skills/ExperienceTimeline';

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box sx={{ py: 8, backgroundColor: 'background.default' }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              sx={{
                textAlign: 'center',
                mb: 6,
                color: 'primary.main',
                fontWeight: 'bold'
              }}
            >
              Compétences & Expérience
            </Typography>
          </motion.div>

          <Box sx={{ mb: 8 }}>
            <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
              Expertise Technique
            </Typography>
            <SkillsList />
          </Box>

          <Box>
            <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
              Parcours Professionnel
            </Typography>
            <ExperienceTimeline />
          </Box>
        </Container>
      </Box>
    </motion.div>
  );
};

export default Skills;