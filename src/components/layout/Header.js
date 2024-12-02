import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box, useScrollTrigger, Slide } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { motion } from 'framer-motion';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const trigger = useScrollTrigger();

  const navigationItems = [
    { label: 'Accueil', path: '/' },
    { label: 'Compétences', path: '/skills' },
    { label: 'Projets', path: '/projects' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar position="fixed" sx={{ backgroundColor: 'background.paper' }}>
        <Toolbar>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, color: 'primary.main', fontWeight: 'bold' }}
            >
              Portfolio
            </Typography>
          </motion.div>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: 'auto' }}>
            {navigationItems.map((item) => (
              <Button
                key={item.path}
                onClick={() => navigate(item.path)}
                sx={{
                  mx: 1,
                  color: location.pathname === item.path ? 'primary.main' : 'text.primary',
                  '&:hover': { backgroundColor: 'primary.light', color: 'white' },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          <IconButton
            sx={{ display: { xs: 'block', md: 'none' }, ml: 'auto' }}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Slide>
  );
};

export default Header;