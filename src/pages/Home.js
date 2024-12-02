import React from 'react';
import { Box } from '@mui/material';
import Hero from '../components/home/Hero';
import Introduction from '../components/home/Introduction';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box sx={{ minHeight: '100vh' }}>
        <Hero />
        <Introduction />
      </Box>
    </motion.div>
  );
};

export default Home;