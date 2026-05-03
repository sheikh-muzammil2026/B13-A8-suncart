"use client";
import { motion } from "framer-motion";

const AnimatedCard = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // শুরুতে নিচে থাকবে এবং দেখা যাবে না
      whileInView={{ opacity: 1, y: 0 }} // স্ক্রলে আসলে উপরে উঠে আসবে এবং দেখা যাবে
      viewport={{ once: true, amount: 0.2 }} // একবার এনিমেশন হবে যখন ২০% স্ক্রিনে আসবে
      transition={{ duration: 0.6, ease: "easeOut" }} // এনিমেশন কতক্ষণ চলবে
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;