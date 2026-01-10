import { motion } from "framer-motion";

const stats = [
  { value: "85%", label: "Tasks automated" },
  { value: "1M+", label: "Concurrent chats managed" },
  { value: "10x", label: "Faster resolution" },
  { value: "20%", label: "Increase in CSAT scores" },
  { value: "90+", label: "Languages supported" },
];

export const Stats = () => {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Get real business wins with Staily
            </h2>
            <p className="text-lg text-muted-foreground">
              Drive tangible results right from the first week
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8 pt-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 150
                }}
                whileHover={{ 
                  scale: 1.1, 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className="text-center cursor-pointer group"
              >
                <motion.div 
                  className="text-4xl lg:text-5xl font-bold text-primary mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: index * 0.1 + 0.3,
                      type: "spring",
                      stiffness: 200
                    }}
                    className="inline-block"
                  >
                    {stat.value}
                  </motion.span>
                </motion.div>
                <motion.div 
                  className="text-sm text-muted-foreground group-hover:text-foreground transition-colors"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                >
                  {stat.label}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
