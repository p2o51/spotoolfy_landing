"use client";
import React from "react";
import { motion } from "framer-motion";

const LyricsSection = ({ id }) => {
  return (
    <motion.div
      className="lyrics-section"
      id={id}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.6 }}
    >
      <h2 className="section-title">Lyrics</h2>
      <div className="lyrics-content">
        <h3 className="section-subtitle">
          Get Lyrics,
          <br />
          translations
          <br />
          <span className="powered-by">powered by Gemini</span>
        </h3>
      </div>
    </motion.div>
  );
};

export default LyricsSection; 