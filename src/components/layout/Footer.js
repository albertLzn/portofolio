import React from 'react';
import { Box, Container, Typography, IconButton, Stack } from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    { icon: <GitHub />, url: 'https://github.com/', label: 'GitHub' },
    { icon: <LinkedIn />, url: 'https://linkedin.com/', label: 'LinkedIn' },
    { icon: <Email />, url: 'mailto:contact@example.com', label: 'Email' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: 'background.paper',
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Mon Portfolio. Tous droits réservés.
          </Typography>

          <Stack direction="row" spacing={2}>
            {socialLinks.map((link, index) => (
              <motion.div
                key={link.label}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconButton
                  aria-label={link.label}
                  onClick={() => window.open(link.url, '_blank')}
                  sx={{ color: 'primary.main' }}
                >
                  {link.icon}
                </IconButton>
              </motion.div>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;