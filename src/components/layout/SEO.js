import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ title, description, image, url }) => {
  const siteTitle = "Mon Portfolio | Développeur Full Stack";
  const defaultDescription = "Portfolio de développeur Full Stack spécialisé en React, Node.js et technologies web modernes";
  const defaultImage = "/images/og-image.jpg";
  const siteUrl = "https://monportfolio.com";

  return (
    <Helmet>
      <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
      <meta name="description" content={description || defaultDescription} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url || siteUrl} />
      <meta property="og:title" content={title || siteTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={image || defaultImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url || siteUrl} />
      <meta name="twitter:title" content={title || siteTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={image || defaultImage} />
    </Helmet>
  );
};

export default SEO;