import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Phone, Users, Video, Target, Zap, TrendingUp, Shield, Clock } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Phone,
    title: "Voice call support",
    description: "24/7 AI-powered voice assistance",
    gradient: "from-blue-500/10 to-cyan-500/10",
    iconColor: "text-blue-500",
  },
  {
    icon: Users,
    title: "Human handover",
    description: "Seamless agent takeover when needed",
    gradient: "from-purple-500/10 to-pink-500/10",
    iconColor: "text-purple-500",
  },
  {
    icon: Video,
    title: "Life-like video calls",
    description: "AI avatars for personal touch",
    gradient: "from-green-500/10 to-emerald-500/10",
    iconColor: "text-green-500",
  },
  {
    icon: Target,
    title: "Active lead collection",
    description: "Smart capture and qualification",
    gradient: "from-orange-500/10 to-red-500/10",
    iconColor: "text-orange-500",
  },
];

const setupBenefits = [
  { icon: Zap, text: "5-minute setup", color: "text-yellow-500" },
  { icon: TrendingUp, text: "Instant ROI", color: "text-green-500" },
  { icon: Shield, text: "Enterprise secure", color: "text-blue-500" },
  { icon: Clock, text: "24/7 support", color: "text-purple-500" },
];

const platformTabs = [
  {
    id: "builder",
    label: "Agent Builder",
    title: "Build Your Perfect AI Agent",
    description: "Drag-and-drop interface to create AI agents that speak your brand language and think like your best employee",
    image: "/agent-builder.png",
  },
  {
    id: "data",
    label: "Data Sources",
    title: "Connect Your Data, Instantly",
    description: "Seamlessly integrate databases, APIs, files, and websites for real-time, accurate AI responses",
    image: "/data-sources.png",
  },
  {
    id: "workflows",
    label: "AI Workflows",
    title: "Automate Without Code",
    description: "Create powerful automation workflows with visual triggers and actions—no coding required",
    image: "/workflows.png",
  },
  {
    id: "analytics",
    label: "Analytics",
    title: "Insights That Drive Results",
    description: "Track CSAT, resolution times, and conversation metrics in beautiful, actionable dashboards",
    image: "/analytics.png",
  },
];

export const Features = () => {
  const [activeTab, setActiveTab] = useState("builder");
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="py-16 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 space-y-24">
        {/* Easy Setup Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8"
        >
          <motion.h2
            className="text-3xl lg:text-5xl font-bold text-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Easy to set up, seamless to use,{" "}
            <span className="text-gradient">loved by your team</span>
          </motion.h2>

          {/* Benefits Pills */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {setupBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.text}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full shadow-sm"
              >
                <benefit.icon className={`h-4 w-4 ${benefit.color}`} />
                <span className="text-sm font-medium">{benefit.text}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="max-w-6xl mx-auto relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {/* Animated background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-3xl blur-3xl animate-pulse" />

            <div className="relative bg-gradient-to-br from-purple-soft to-muted rounded-3xl p-4 lg:p-8 card-shadow-lg">
              <motion.div
                className="relative rounded-2xl overflow-hidden bg-background shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/dashboard-preview.png"
                  alt="Staily Dashboard Interface"
                  className="w-full h-auto"
                  loading="lazy"
                />
                {/* Overlay gradient for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            <Button size="lg" className="gap-2 shadow-lg hover:shadow-xl transition-shadow" asChild>
              <a href="https://console.fynd.com/kaily/asia-south1/try-for-free?entry_page=%2F&__hstc=141944045.35e90d45e45f607b1d192eff22a85a1b.1767958078313.1767958078313.1767958078313.1&__hssc=141944045.1.1767958078313&__hsfp=4271721474" target="_blank" rel="noopener noreferrer">
                <Sparkles className="h-5 w-5" />
                Start Building for Free
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Key Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="flex items-center justify-center gap-2">
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Key features</span>
            <Sparkles className="h-4 w-4 text-primary" />
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-center">
            Do more with Staily, right out of the box
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`bg-gradient-to-br ${feature.gradient} backdrop-blur-sm rounded-2xl p-6 border border-border/50 shadow-md hover:shadow-xl transition-all cursor-pointer`}
              >
                <motion.div
                  className="w-14 h-14 bg-background rounded-xl flex items-center justify-center mb-4 shadow-sm"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className={`h-7 w-7 ${feature.iconColor}`} />
                </motion.div>
                <h3 className="font-semibold text-foreground mb-2 text-lg">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Platform Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground text-center">
            Discover the <span className="text-gradient">platform</span>
          </h2>

          <motion.div
            className="flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {platformTabs.map((tab, index) => (
              <motion.button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setImageLoaded(false);
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all shadow-md ${activeTab === tab.id
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                    : "bg-card text-muted-foreground hover:text-foreground hover:bg-muted border border-border"
                  }`}
              >
                {tab.label}
              </motion.button>
            ))}
          </motion.div>

          <AnimatePresence mode="wait">
            {platformTabs.map((tab) => (
              activeTab === tab.id && (
                <motion.div
                  key={tab.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="max-w-5xl mx-auto space-y-6">
                    <motion.div
                      className="text-center space-y-4"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h3 className="text-2xl lg:text-3xl font-bold text-foreground">{tab.title}</h3>
                      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{tab.description}</p>
                    </motion.div>

                    <motion.div
                      className="relative group"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                    >
                      {/* Animated glow effect */}
                      <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 via-purple-500/30 to-primary/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="relative bg-gradient-to-br from-muted/50 to-muted rounded-2xl p-4 lg:p-8 shadow-xl">
                        <motion.div
                          className="relative rounded-xl overflow-hidden bg-background shadow-2xl"
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.3 }}
                        >
                          <img
                            src={tab.image}
                            alt={`${tab.title} Interface`}
                            className="w-full h-auto"
                            loading="lazy"
                            onLoad={() => setImageLoaded(true)}
                          />
                          {!imageLoaded && (
                            <div className="absolute inset-0 bg-muted animate-pulse" />
                          )}
                          {/* Subtle overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent pointer-events-none" />
                        </motion.div>
                      </div>
                    </motion.div>

                    <motion.div
                      className="text-center"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <Button size="lg" className="shadow-lg hover:shadow-xl transition-shadow" asChild>
                        <a href="https://console.fynd.com/kaily/asia-south1/try-for-free?entry_page=%2F&__hstc=141944045.35e90d45e45f607b1d192eff22a85a1b.1767958078313.1767958078313.1767958078313.1&__hssc=141944045.1.1767958078313&__hsfp=4271721474" target="_blank" rel="noopener noreferrer">
                          Explore {tab.label}
                        </a>
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
