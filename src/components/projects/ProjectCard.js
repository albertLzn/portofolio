import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Chip, IconButton } from '@mui/material';
import { GitHub, Launch } from '@mui/icons-material';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card 
        elevation={3}
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          overflow: 'hidden',
          '&:hover .project-overlay': {
            opacity: 1
          }
        }}
      >
        <CardMedia
          component="img"
          height="200"
          image={project.image}
          alt={project.title}
          sx={{
            objectFit: 'cover',
          }}
        />
        
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="h6" gutterBottom component="h3">
            {project.title}
          </Typography>
          
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            {project.description}
          </Typography>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
            {project.technologies.map((tech, index) => (
              <Chip
                key={index}
                label={tech}
                size="small"
                color="primary"
                variant="outlined"
              />
            ))}
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
            {project.github && (
              <IconButton
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                color="primary"
              >
                <GitHub />
              </IconButton>
            )}
            {project.demo && (
              <IconButton
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                color="primary"
              >
                <Launch />
              </IconButton>
            )}
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;