import React from 'react';
import { Box, Typography, Grid, Paper, IconButton } from '@mui/material';
import { Email, LinkedIn, GitHub, Phone } from '@mui/icons-material';
import { motion } from 'framer-motion';

const ContactInfo = () => {
  const contactMethods = [
    {
      icon: <Email />,
      title: 'Email',
      value: 'contact@example.com',
      link: 'mailto:contact@example.com'
    },
    {
      icon: <Phone />,
      title: 'Téléphone',
      value: '+33 6 12 34 56 78',
      link: 'tel:+33612345678'
    },
    {
      icon: <LinkedIn />,
      title: 'LinkedIn',
      value: 'linkedin.com/in/profile',
      link: 'https://linkedin.com/in/profile'
    },
    {
      icon: <GitHub />,
      title: 'GitHub',
      value: 'github.com/username',
      link: 'https://github.com/username'
    }
  ];

  return (
    <Grid container spacing={3}>
      {contactMethods.map((method, index) => (
        <Grid item xs={12} sm={6} key={index}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Paper
              elevation={2}
              sx={{
                p: { xs: 2, sm: 3 },
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 4
                }
              }}
            >
              <IconButton
                color="primary"
                component="a"
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  backgroundColor: 'primary.light',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'primary.main'
                  }
                }}
              >
                {method.icon}
              </IconButton>
              <Box>
                <Typography variant="subtitle2" color="text.secondary">
                  {method.title}
                </Typography>
                <Typography variant="body1">
                  {method.value}
                </Typography>
              </Box>
            </Paper>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  );
};

export default ContactInfo;