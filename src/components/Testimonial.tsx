import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export const Testimonial = () => {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <Quote className="h-10 w-10 text-primary mx-auto opacity-50" />
          
          <blockquote className="text-xl lg:text-2xl text-foreground font-medium leading-relaxed">
            "At our company, we've always believed that discovery should feel effortless. 
            With Staily, we are giving shoppers a smarter way to explore with conversational AI."
          </blockquote>
          
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
              <span className="text-lg font-bold text-primary">AT</span>
            </div>
            <div className="text-left">
              <p className="font-semibold text-foreground">Anand Thakur</p>
              <p className="text-sm text-muted-foreground">CPTO, Leading E-commerce</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
