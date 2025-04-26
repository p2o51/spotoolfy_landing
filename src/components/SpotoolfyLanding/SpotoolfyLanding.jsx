"use client";
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import LyricsSection from "./LyricsSection";
import NotesSection from "./NotesSection";
import InsightsSection from "./InsightsSection";
import waveImage from '../../images/wave.png';
import { useTranslation } from 'next-i18next';

const SpotoolfyLanding = () => {
  const { t } = useTranslation('common');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('features');
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // 计算当前滚动位置处于哪个部分
      const sections = ['features', 'lyrics', 'notes', 'insights'];
      const sectionElements = sections.map(id => document.getElementById(id));
      
      // 找出当前在视口中的部分，设置为活跃部分
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section) {
          const rect = section.getBoundingClientRect();
          // 如果部分顶部在视口内或刚好在视口上方
          if (rect.top <= 150) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <>
      {/* 顶部导航栏 */}
      <motion.nav
        className={`nav-container ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="nav-content">
          <motion.a 
            href="#" 
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
          
          <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            <a 
              href="#introduction" 
              className={`nav-link ${activeSection === 'introduction' ? 'active' : ''}`}
              onClick={() => {
                setActiveSection('introduction');
                setMobileMenuOpen(false);
              }}
            >
              {t('nav_introduction')}
            </a>
            <a 
              href="/config" 
              className={`nav-link`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('nav_config')}
            </a>
            <a 
              href="/features" 
              className={`nav-link`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('nav_features')}
            </a>
          </div>
          
          <Link href="/install" passHref>
            <motion.button 
              className="nav-button"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "#65558f",
                color: "#ffffff" 
              }}
              whileTap={{ scale: 0.95 }}
            >
              {t('button_get_started')}
            </motion.button>
          </Link>
          
          <motion.button 
            className="nav-mobile-toggle" 
            onClick={toggleMobileMenu}
            whileTap={{ scale: 0.9 }}
            animate={mobileMenuOpen ? { rotate: 90 } : { rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </motion.button>
        </div>
      </motion.nav>
      
      <div className="spotoolfy-landing">
        <div className="content-wrapper">
          <HeroSection id="features" />

          <motion.div
            className="divider-container"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Image 
              src={waveImage}
              className="divider-image"
              alt="Divider"
              width={697}
              height={67}
              priority
            />
          </motion.div>

          <FeaturesSection />
          <LyricsSection id="introduction" />
          <NotesSection id="notes" />
          <InsightsSection id="insights" />
        </div>
      </div>
    </>
  );
};

export default SpotoolfyLanding;
