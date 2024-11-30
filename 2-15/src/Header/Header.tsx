import React from 'react';

type HeaderProps = {
  logoUrl: string;
  children: React.ReactNode;
};

const Header: React.FC<HeaderProps> = ({ logoUrl, children }) => {
  return (
    <header>
      <img src={logoUrl} alt="" />
      {children} {/* Affiche les enfants passés à Header */}
    </header>
  );
};

export default Header;
