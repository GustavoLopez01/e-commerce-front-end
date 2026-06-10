import { motion } from "motion/react";


export default function Sidebar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 1 * 0.08 }}
    >

    </motion.div>
  )
}
