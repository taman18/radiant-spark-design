import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/15550100199"
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.8, type: "spring", stiffness: 200, damping: 18 }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-[oklch(0.72_0.18_150)] text-white shadow-glow ring-1 ring-white/20"
    >
      <span className="absolute inset-0 -z-10 rounded-full bg-[oklch(0.72_0.18_150)] opacity-60 blur-xl animate-pulse-glow" />
      <MessageCircle className="h-6 w-6" />
    </motion.a>
  );
}
