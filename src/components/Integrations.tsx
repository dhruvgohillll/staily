import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const integrations = [
  "OpenAI", "Azure", "Slack", "Stripe", "Calendly", "Freshchat",
  "Zendesk", "Asana", "Webflow", "Twilio", "Jira", "MySQL",
];

export const Integrations = () => {
  return (
    <section className="py-16 lg:py-24 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-12"
        >
          <div className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Native integrations with
            <Sparkles className="h-4 w-4 text-primary" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Built to fit right in with your stack
          </h2>
        </motion.div>

        {/* Marquee Rows */}
        <div className="space-y-4">
          {/* Row 1 - Left */}
          <div className="relative">
            <div className="flex animate-marquee pause-animation gap-4">
              {[...integrations, ...integrations].map((name, index) => (
                <div
                  key={`row1-${index}`}
                  className="flex-shrink-0 w-32 h-16 bg-background rounded-xl border border-border flex items-center justify-center hover:border-primary/30 transition-colors"
                >
                  <span className="text-sm font-medium text-muted-foreground">{name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Right */}
          <div className="relative">
            <div className="flex animate-marquee-reverse pause-animation gap-4">
              {[...integrations.reverse(), ...integrations].map((name, index) => (
                <div
                  key={`row2-${index}`}
                  className="flex-shrink-0 w-32 h-16 bg-background rounded-xl border border-border flex items-center justify-center hover:border-primary/30 transition-colors"
                >
                  <span className="text-sm font-medium text-muted-foreground">{name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 3 - Left */}
          <div className="relative">
            <div className="flex animate-marquee pause-animation gap-4" style={{ animationDuration: '40s' }}>
              {[...integrations, ...integrations].map((name, index) => (
                <div
                  key={`row3-${index}`}
                  className="flex-shrink-0 w-32 h-16 bg-background rounded-xl border border-border flex items-center justify-center hover:border-primary/30 transition-colors"
                >
                  <span className="text-sm font-medium text-muted-foreground">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
