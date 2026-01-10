import { motion } from "framer-motion";
import { Sparkles, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-soft via-muted to-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center space-y-8"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground uppercase tracking-wider"
          >
            Transform your business
            <motion.div
              animate={{ rotate: [0, 180, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="h-4 w-4 text-primary" />
            </motion.div>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-3xl lg:text-5xl font-bold text-foreground max-w-3xl mx-auto"
          >
            Staily can do great things for your business
          </motion.h2>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 pt-4"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="gap-2 px-8 h-14 text-base" asChild>
                <a href="https://console.fynd.com/kaily/asia-south1/try-for-free?entry_page=%2F&__hstc=141944045.35e90d45e45f607b1d192eff22a85a1b.1767958078313.1767958078313.1767958078313.1&__hssc=141944045.1.1767958078313&__hsfp=4271721474" target="_blank" rel="noopener noreferrer">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                  >
                    <Sparkles className="h-5 w-5" />
                  </motion.div>
                  Try for free
                </a>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" variant="outline" className="gap-2 px-8 h-14 text-base border-2">
                <Calendar className="h-5 w-5" />
                Talk to an expert
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
