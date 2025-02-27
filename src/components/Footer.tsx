import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 w-full mt-auto">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm md:text-base">
          Copyright © {new Date().getFullYear()} Shri Shakumbhari Devi - All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;