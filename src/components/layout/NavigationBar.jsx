"use client";
import React from 'react';
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

const NavigationBar = () => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const currentPath = router.pathname; // Get current path

  // Define navigation links
  const navLinks = [
    { href: '/', labelKey: 'nav_introduction' },
    { href: '/config', labelKey: 'nav_config' },
    { href: '/features', labelKey: 'nav_features' },
  ];

  return (
    <motion.nav
      className="nav-container scrolled" // Keep scrolled style for consistent appearance
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-content">
        {/* Logo */}
        <Link href="/" passHref legacyBehavior>
          <motion.a
            className="nav-logo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src="/logo.png"
              alt="Spotoolfy Logo"
              width={40}
              height={40}
            />
            <span className="nav-logo-text">Spotoolfy</span>
          </motion.a>
        </Link>

        {/* Links */}
        <div className="nav-links active"> {/* Keep active to ensure visibility */}
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} passHref legacyBehavior>
              <a className={`nav-link ${currentPath === link.href ? 'active' : ''}`}>
                {t(link.labelKey)}
              </a>
            </Link>
          ))}
        </div>

        {/* Get Started Button */}
        <Link href="/install" passHref legacyBehavior>
          <motion.button
            className={`nav-button ${currentPath === '/install' ? 'active-button-style' : ''}`} // Add active style if needed
            whileHover={{
              scale: 1.05,
              backgroundColor: "#65558f", // Adjust hover style as needed
              color: "#ffffff"
            }}
            whileTap={{ scale: 0.95 }}
          >
            {t('button_get_started')}
          </motion.button>
        </Link>
        {/* Mobile toggle might not be needed or implement separately if required */}
      </div>
    </motion.nav>
  );
};

export default NavigationBar; 