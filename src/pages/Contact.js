import React from 'react';
import { Container, Typography, Box, Grid, useTheme, useMediaQuery } from '@mui/material';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import { motion } from 'framer-motion';

const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box 
        sx={{
          py: { xs: 4, sm: 6, md: 8 },
          px: { xs: 2, sm: 3, md: 4 },
          backgroundColor: 'background.default'
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12}>
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
                    mb: { xs: 3, sm: 4, md: 6 },
                    fontSize: { xs: '2.5rem', sm: '3rem', md: '3.75rem' },
                    color: 'primary.main',
                    fontWeight: 'bold'
                  }}
                >
                  Contactez-moi
                </Typography>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box sx={{ mb: { xs: 4, md: 0 } }}>
                <ContactInfo />
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <ContactForm />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </motion.div>
  );
};

export default Contact;