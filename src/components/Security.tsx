import { motion } from "framer-motion";
import { Shield, Lock, FileCheck } from "lucide-react";

const securityFeatures = [
  {
    icon: Lock,
    title: "Secure MCP integrations",
    description: "Enable secure AI access to your data via MCP connections",
  },
  {
    icon: Shield,
    title: "Protected customer data",
    description: "All customer data is encrypted and always under your control",
  },
  {
    icon: FileCheck,
    title: "Complete compliance",
    description: "Our agents meet compliance standards with audit-ready logs",
  },
];

export const Security = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Enterprise-grade security & data privacy
            </h2>
            <p className="text-lg text-muted-foreground">
              Staily is SOC 2 Type II and GDPR compliant, ensuring complete data privacy and zero compliance issues for global businesses
            </p>
            
            {/* Certification Badges */}
            <div className="flex justify-center gap-6 pt-4">
              {["SOC 2", "GDPR", "ISO 27001"].map((cert, index) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5,
                    delay: index * 0.2,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ 
                    scale: 1.15, 
                    rotate: 5,
                    y: -5
                  }}
                  className="w-20 h-20 bg-muted rounded-xl border border-border flex items-center justify-center cursor-pointer group"
                >
                  <motion.span 
                    className="text-xs font-bold text-muted-foreground group-hover:text-primary transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    {cert}
                  </motion.span>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.03,
                  transition: { duration: 0.2 }
                }}
                className="bg-card rounded-2xl p-6 border border-border card-shadow hover:card-shadow-lg transition-all text-center cursor-pointer group"
              >
                <motion.div 
                  className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="h-6 w-6 text-primary" />
                </motion.div>
                <motion.h3 
                  className="font-semibold text-foreground mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.2 }}
                >
                  {feature.title}
                </motion.h3>
                <motion.p 
                  className="text-sm text-muted-foreground"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.3 }}
                >
                  {feature.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
