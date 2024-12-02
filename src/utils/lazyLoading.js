import { lazy } from 'react';

export const lazyLoad = (path) => {
  return lazy(() => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(import(`../${path}`));
      }, 300); // Simule un délai minimal pour éviter le flash
    });
  });
};

// Composants chargés paresseusement
export const LazyHome = lazyLoad('pages/Home');
export const LazySkills = lazyLoad('pages/Skills');
export const LazyProjects = lazyLoad('pages/Projects');
export const LazyContact = lazyLoad('pages/Contact');