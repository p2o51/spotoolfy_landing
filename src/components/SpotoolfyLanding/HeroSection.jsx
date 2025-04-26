"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaDiscord } from "react-icons/fa";
import albumImage from "../../images/album.png";

const HeroSection = ({ id }) => {
  return (
    <div className="hero-section" id={id}>
      <div className="hero-grid">
        <motion.div
          className="hero-image-column"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src={albumImage}
            className="hero-image"
            alt="Spotoolfy hero"
            width={500}
            height={500}
            priority
          />
        </motion.div>
        <motion.div
          className="hero-content-column"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="hero-content">
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Spotoolfy
            </motion.h1>
            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a href="https://github.com/p2o51/spotoolfy_flutter" target="_blank" rel="noopener noreferrer" className="platform-link">
                <motion.div
                  className="platform-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub className="platform-icon" />
                  GitHub
                </motion.div>
              </a>
              <a href="https://discord.gg/v56yDs6vRN" target="_blank" rel="noopener noreferrer" className="platform-link">
                <motion.div
                  className="platform-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaDiscord className="platform-icon" />
                  Discord
                </motion.div>
              </a>
            </motion.div>
            <motion.h2
              className="hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Unlock Spotify's beauty and power.
            </motion.h2>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection; 