import React from "react";
import { Box } from "@mui/material";
import ContactForm from "../components/forms/ContactForm";
import { motion, AnimatePresence } from "framer-motion";
export default function ContactMePage() {
  const containerStyles = {
    margin: 4,
  };
  return (
    <AnimatePresence>
      <motion.div
        transition={{ delay: 0.17 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Box sx={containerStyles}>
          <ContactForm />
        </Box>
      </motion.div>
    </AnimatePresence>
  );
}
