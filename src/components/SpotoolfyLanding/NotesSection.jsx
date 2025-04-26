"use client";
import React from "react";
import { motion } from "framer-motion";

const NotesSection = ({ id }) => {
  return (
    <motion.div
      className="notes-section"
      id={id}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.8 }}
    >
      <h2 className="section-title">Notes</h2>
      <h3 className="section-subtitle">Your music records</h3>
    </motion.div>
  );
};

export default NotesSection; 