import React from 'react';
import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Hero = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(45deg, #2196f3 30%, #21CBF3 90%)',
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <Stack spacing={4} alignItems="flex-start">
            <motion.div variants={containerVariants}>
              <Typography variant="h1" sx={{ fontWeight: 'bold', fontSize: { xs: '2.5rem', md: '4rem' } }}>
                Développeur Full Stack
              </Typography>
            </motion.div>

            <motion.div variants={containerVariants}>
              <Typography variant="h4" sx={{ maxWidth: '800px', mb: 4 }}>
                Création d'applications web modernes et performantes
              </Typography>
            </motion.div>

            <motion.div variants={containerVariants}>
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: 'white',
                  color: 'primary.main',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  },
                }}
              >
                Découvrir mes projets
              </Button>
            </motion.div>
          </Stack>
        </motion.div>

        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          style={{
            position: 'absolute',
            bottom: 40,
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          <KeyboardArrowDownIcon sx={{ fontSize: 40 }} />
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero;