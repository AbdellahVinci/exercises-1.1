import React from 'react';

type FooterProps = {
  logoUrl: string;
  children: React.ReactNode;
};

const Footer: React.FC<FooterProps> = ({ logoUrl, children }) => {
  return (
    <footer>
      <img src={logoUrl} alt="" />
      {children} {/* Affiche les enfants passés à Fooooooter */}
    </footer>
  );
};

export default Footer;
