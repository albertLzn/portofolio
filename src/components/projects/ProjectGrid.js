import React, { useState } from 'react';
import { Grid, Box, Tabs, Tab } from '@mui/material';
import ProjectCard from './ProjectCard';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectsGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Plateforme e-commerce complète avec panier, paiement et gestion des commandes",
      image: "/assets/images/project1.jpg",
      category: "fullstack",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/username/project1",
      demo: "https://demo-project1.com"
    },
    {
      id: 2,
      title: "Dashboard Analytics",
      description: "Tableau de bord analytique avec visualisation de données en temps réel",
      image: "/assets/images/project2.jpg",
      category: "frontend",
      technologies: ["React", "D3.js", "Material-UI", "Redux"],
      github: "https://github.com/username/project2",
      demo: "https://demo-project2.com"
    },
    {
      id: 3,
      title: "API REST",
      description: "API REST sécurisée avec authentification JWT et documentation Swagger",
      image: "/assets/images/project3.jpg",
      category: "backend",
      technologies: ["Node.js", "Express", "MongoDB", "JWT"],
      github: "https://github.com/username/project3"
    }
  ];

  const categories = [
    { value: 'all', label: 'Tous' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'backend', label: 'Backend' },
    { value: 'fullstack', label: 'Full Stack' }
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
        <Tabs
          value={selectedCategory}
          onChange={(e, newValue) => setSelectedCategory(newValue)}
          centered
          sx={{ mb: 3 }}
        >
          {categories.map((category) => (
            <Tab
              key={category.value}
              label={category.label}
              value={category.value}
            />
          ))}
        </Tabs>
      </Box>

      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Grid container spacing={3}>
            {filteredProjects.map((project) => (
              <Grid item xs={12} sm={6} md={4} key={project.id}>
                <ProjectCard project={project} />
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </AnimatePresence>
    </Box>
  );
};

export default ProjectsGrid;