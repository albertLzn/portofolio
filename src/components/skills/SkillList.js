import React from 'react';
import { Box, Paper, Typography, LinearProgress, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SkillsList = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const skills = [
    { category: "Frontend", items: [
      { name: "React.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Material-UI", level: 88 },
      { name: "CSS/SASS", level: 85 }
    ]},
    { category: "Backend", items: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 82 },
      { name: "MongoDB", level: 80 },
      { name: "SQL", level: 78 }
    ]},
    { category: "DevOps", items: [
      { name: "Docker", level: 75 },
      { name: "CI/CD", level: 70 },
      { name: "AWS", level: 65 },
      { name: "Git", level: 88 }
    ]}
  ];

  return (
    <Box ref={ref} sx={{ py: 4 }}>
      <Grid container spacing={4}>
        {skills.map((skillCategory, categoryIndex) => (
          <Grid item xs={12} md={4} key={categoryIndex}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
            >
              <Paper elevation={3} sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom color="primary.main">
                  {skillCategory.category}
                </Typography>
                {skillCategory.items.map((skill, index) => (
                  <Box key={index} sx={{ mb: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="body1">{skill.name}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {skill.level}%
                      </Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={inView ? skill.level : 0}
                      sx={{
                        height: 8,
                        borderRadius: 4,
                        backgroundColor: 'grey.200',
                        '& .MuiLinearProgress-bar': {
                          borderRadius: 4,
                          backgroundColor: 'primary.main',
                        },
                      }}
                    />
                  </Box>
                ))}
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SkillsList;