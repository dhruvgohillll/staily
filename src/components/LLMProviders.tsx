import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const LLMProviders = () => {
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
          {/* No-code workflows */}
          <div className="text-center space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Custom workflows
              <Sparkles className="h-4 w-4 text-primary" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Create no-code workflows to empower your AI agent
            </h2>
            <Button size="lg" className="gap-2" asChild>
              <a href="https://console.fynd.com/kaily/asia-south1/try-for-free?entry_page=%2F&__hstc=141944045.35e90d45e45f607b1d192eff22a85a1b.1767958078313.1767958078313.1767958078313.1&__hssc=141944045.1.1767958078313&__hsfp=4271721474" target="_blank" rel="noopener noreferrer">
                <Sparkles className="h-5 w-5" />
                Try for free
              </a>
            </Button>
          </div>

          {/* LLM Providers */}
          <div className="text-center space-y-4 pt-16">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Powered by the best
              <Sparkles className="h-4 w-4 text-primary" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Plug Staily with the world's top AI providers
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Choose from the world's leading LLMs like ChatGPT, Grok, DeepSeek, ElevenLabs, Retell, and more to power your AI agents
            </p>
            
            {/* LLM Logos */}
            <div className="flex flex-wrap justify-center items-center gap-6 pt-8">
              {["ChatGPT", "Claude", "Grok", "DeepSeek", "Gemini", "ElevenLabs"].map((llm) => (
                <div
                  key={llm}
                  className="w-24 h-24 bg-gradient-to-br from-muted to-background rounded-2xl border border-border flex items-center justify-center hover:border-primary/30 transition-colors"
                >
                  <span className="text-xs font-medium text-muted-foreground">{llm}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
