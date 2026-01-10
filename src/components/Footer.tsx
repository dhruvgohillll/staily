import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";

const footerLinks = {
  Product: ["Agent Builder", "Data Sources", "AI Workflows", "Analytics", "Voice Agents", "WhatsApp Bots"],
  Solutions: ["E-commerce", "Healthcare", "Finance", "Real Estate", "Education", "Hospitality"],
  Resources: ["Documentation", "Blog", "Case Studies", "Webinars", "API Reference", "Community"],
  Company: ["About Us", "Careers", "Contact", "Partners", "Press", "Legal"],
};

export const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.3,
      },
    }),
  };

  return (
    <footer className="bg-foreground text-background py-16 lg:py-20 relative overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8"
        >
          {/* Logo & Description */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-2 space-y-6"
          >
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <motion.div
                animate={{ rotate: [0, 180, 360] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="h-6 w-6 text-primary" />
              </motion.div>
              <span className="text-xl font-bold">staily</span>
            </motion.div>
            <motion.p 
              variants={itemVariants}
              className="text-sm text-background/60 max-w-xs"
            >
              The AI agent platform that goes beyond the chatbox. Automate sales, support, and workflows with intelligent AI agents.
            </motion.p>
            <motion.div 
              variants={itemVariants}
              className="flex gap-4"
            >
              {["Twitter", "LinkedIn", "YouTube"].map((social, index) => (
                <motion.a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <span className="text-xs font-medium">{social[0]}</span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div 
              key={category} 
              variants={itemVariants}
              className="space-y-4"
            >
              <motion.h4 
                className="font-semibold text-background"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {category}
              </motion.h4>
              <ul className="space-y-2">
                {links.map((link, linkIndex) => (
                  <motion.li 
                    key={link}
                    custom={linkIndex}
                    variants={linkVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                  >
                    <motion.a
                      href="#"
                      className="text-sm text-background/60 hover:text-background transition-colors inline-block"
                      whileHover={{ x: 5, color: "rgb(255, 255, 255)" }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {link}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          className="mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <motion.p 
            className="text-sm text-background/40"
            whileHover={{ scale: 1.05 }}
          >
            © 2025 Staily.ai. All rights reserved.
          </motion.p>
          <motion.div 
            className="flex gap-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.7 }}
          >
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link, index) => (
              <motion.a 
                key={link}
                href="#" 
                className="text-sm text-background/60 hover:text-background transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                {link}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};
