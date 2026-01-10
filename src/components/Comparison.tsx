import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const comparisonData = [
  {
    traditional: "Responds to queries",
    staily: "Completes tasks autonomously",
  },
  {
    traditional: "Follows static scripts",
    staily: "Adapts to context & user intent",
  },
  {
    traditional: "Waits for instructions",
    staily: "Takes initiative, offers next steps",
  },
  {
    traditional: "Rule-based decision-making",
    staily: "Combines logic + learning to execute smart actions",
  },
  {
    traditional: "Works in silos",
    staily: "Orchestrates across tools & platforms",
  },
  {
    traditional: "Feels like a tool",
    staily: "Feels like a team member",
  },
];

export const Comparison = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Traditional AI chatbots vs Staily
            </h2>
            <p className="text-lg text-muted-foreground">
              What makes Staily better than run-of-the-mill chatbots
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl overflow-hidden border border-border card-shadow-lg">
              {/* Header */}
              <div className="grid grid-cols-2 bg-muted">
                <div className="p-4 lg:p-6 border-r border-border">
                  <h3 className="font-semibold text-muted-foreground">Traditional chatbot</h3>
                </div>
                <div className="p-4 lg:p-6 bg-primary/5">
                  <h3 className="font-semibold text-primary">Staily</h3>
                </div>
              </div>
              
              {/* Rows */}
              {comparisonData.map((row, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="grid grid-cols-2 border-t border-border"
                >
                  <div className="p-4 lg:p-6 border-r border-border flex items-start gap-3">
                    <X className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{row.traditional}</span>
                  </div>
                  <div className="p-4 lg:p-6 bg-primary/5 flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground font-medium">{row.staily}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
