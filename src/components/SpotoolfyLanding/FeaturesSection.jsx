"use client";
import React from "react";
import { motion } from "framer-motion";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import Image from "next/image";
import { FaChartPie } from "react-icons/fa";
import cxoxoImage from "../../images/cxoxo.png";

const FeaturesSection = ({ id }) => {
  return (
    <motion.div
      className="features-section"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
      id={id}
    >
      <div className="features-grid">
        <div className="features-content-column">
          <div className="features-content">
            <motion.h2
              className="features-title"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              it's like supernatural.
            </motion.h2>
            <motion.div
              className="stats-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.4 }}
            >
              <div className="stats-left-content">
                <span className="stats-title">First Recorded</span>
                <span className="stats-value">23</span>
                <span className="stats-subtitle">Days Ago</span>
              </div>
              <div className="stats-icon-container">
                <ArrowOutwardIcon className="stats-icon" />
              </div>
              <div className="stats-icon-container purple-bg">
                <WhatshotIcon className="stats-icon white-icon" />
              </div>
              <div className="stats-right-content">
                <span className="stats-title">Last Played At</span>
                <span className="stats-yesterday">Yesterday,</span>
                <span className="stats-time">15:37</span>
              </div>
            </motion.div>
          </div>
        </div>
        <motion.div
          className="features-image-column"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab10f09b54ccb5b7e0329d9d4fd078ff5f382c33?placeholderIfAbsent=true"
            className="features-image"
            alt="Features illustration"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FeaturesSection; 