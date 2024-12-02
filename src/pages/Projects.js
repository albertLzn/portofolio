import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import ProjectsGrid from '../components/projects/ProjectGrid';
import { motion } from 'framer-motion';

const Projects = () => {
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
              align="center"
              gutterBottom
              sx={{
                mb: 6,
                color: 'primary.main',
                fontWeight: 'bold'
              }}
            >
              Mes Projets
            </Typography>
          </motion.div>

          <ProjectsGrid />
        </Container>
      </Box>
    </motion.div>
  );
};

export default Projects;