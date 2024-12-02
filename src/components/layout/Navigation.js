import React from 'react';
import { Drawer, List, ListItem, ListItemText, ListItemIcon, Box } from '@mui/material';
import { Home, Code, Work, Email } from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navigation = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { text: 'Accueil', icon: <Home />, path: '/' },
    { text: 'Compétences', icon: <Code />, path: '/skills' },
    { text: 'Projets', icon: <Work />, path: '/projects' },
    { text: 'Contact', icon: <Email />, path: '/contact' },
  ];

  const handleNavigation = (path) => {
    navigate(path);
    onClose();
  };

  return (
    <Drawer
      anchor="right"
      open={isOpen}
      onClose={onClose}
      PaperProps={{
        sx: { width: { xs: '100%', sm: 300 } },
      }}
    >
      <Box
        sx={{
          height: '100%',
          padding: 2,
          backgroundColor: 'background.paper',
        }}
      >
        <List>
          {menuItems.map((item) => (
            <motion.div
              key={item.text}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ListItem
                button
                onClick={() => handleNavigation(item.path)}
                selected={location.pathname === item.path}
                sx={{
                  borderRadius: 1,
                  mb: 1,
                  '&.Mui-selected': {
                    backgroundColor: 'primary.light',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: 'primary.main',
                    },
                  },
                }}
              >
                <ListItemIcon sx={{ color: 'inherit' }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            </motion.div>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Navigation;