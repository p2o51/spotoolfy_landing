"use client";
import React from "react";
import { motion } from "framer-motion";

const InsightsSection = ({ id }) => {
  return (
    <motion.div
      className="insights-section"
      id={id}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 2 }}
    >
      <div className="insights-grid">
        <motion.div
          className="insights-icon-column"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="insights-icon"></div>
        </motion.div>
        <div className="insights-content-column">
          <div className="insights-content">
            <h2 className="section-title">Insights</h2>
            <h3 className="section-subtitle">Get personal Insights</h3>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default InsightsSection; 