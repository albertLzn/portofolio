export const ROUTES = {
    HOME: '/',
    SKILLS: '/skills',
    PROJECTS: '/projects',
    CONTACT: '/contact',
  };
  
  export const BREAKPOINTS = {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
  };
  
  export const TRANSITIONS = {
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    },
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    },
  };
  
  export const SECTION_PADDING = {
    xs: 2,  // 16px
    sm: 4,  // 32px
    md: 6,  // 48px
    lg: 8,  // 64px
  };
  
  export const CONTAINER_MAXWIDTH = {
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
  };
  
  export const SKILLS_CATEGORIES = [
    {
      title: 'Frontend',
      skills: ['React', 'TypeScript', 'Material-UI', 'CSS/SASS', 'Redux'],
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express', 'MongoDB', 'SQL', 'REST API'],
    },
    {
      title: 'DevOps',
      skills: ['Docker', 'AWS', 'CI/CD', 'Git', 'Linux'],
    },
    {
      title: 'Outils',
      skills: ['VS Code', 'Figma', 'Postman', 'Jest', 'Webpack'],
    },
  ];
  
  export const CONTACT_VALIDATION = {
    email: {
      required: 'L\'email est requis',
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: 'Adresse email invalide',
      },
    },
    name: {
      required: 'Le nom est requis',
      minLength: {
        value: 2,
        message: 'Le nom doit contenir au moins 2 caractères',
      },
    },
    message: {
      required: 'Le message est requis',
      minLength: {
        value: 10,
        message: 'Le message doit contenir au moins 10 caractères',
      },
    },
  };