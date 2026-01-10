import { motion } from "framer-motion";
import { Sparkles, Phone, Users, Video, Target, Settings, Database, BarChart3 } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Phone,
    title: "Voice call support",
    description: "24/7 AI-powered voice assistance",
  },
  {
    icon: Users,
    title: "Human handover",
    description: "Seamless agent takeover when needed",
  },
  {
    icon: Video,
    title: "Life-like video calls",
    description: "AI avatars for personal touch",
  },
  {
    icon: Target,
    title: "Active lead collection",
    description: "Smart capture and qualification",
  },
];

const platformTabs = [
  {
    id: "builder",
    label: "Agent Builder",
    title: "Agent Builder",
    description: "Build AI agents that speak your brand language and think like your best employee",
  },
  {
    id: "data",
    label: "Data Sources",
    title: "Data Sources",
    description: "Connect with your real-time data to get fresh and accurate answers",
  },
  {
    id: "workflows",
    label: "AI Workflows",
    title: "AI Workflows",
    description: "Trigger real actions with simple, no-code workflows",
  },
  {
    id: "analytics",
    label: "Analytics",
    title: "Analytics",
    description: "Track resolution time, CSAT, and support wins all from a single dashboard",
  },
];

export const Features = () => {
  const [activeTab, setActiveTab] = useState("builder");

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8 space-y-24">
        {/* Easy Setup Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Easy to set up, seamless to use, loved by your team
          </h2>
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-purple-soft to-muted rounded-3xl p-8 lg:p-12 card-shadow-lg">
            <div className="aspect-video bg-background rounded-2xl flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-primary/10 rounded-2xl mx-auto flex items-center justify-center">
                  <Settings className="h-10 w-10 text-primary" />
                </div>
                <p className="text-muted-foreground">Platform Dashboard Preview</p>
              </div>
            </div>
          </div>
          <Button size="lg" className="gap-2" asChild>
            <a href="https://console.fynd.com/kaily/asia-south1/try-for-free?entry_page=%2F&__hstc=141944045.35e90d45e45f607b1d192eff22a85a1b.1767958078313.1767958078313.1767958078313.1&__hssc=141944045.1.1767958078313&__hsfp=4271721474" target="_blank" rel="noopener noreferrer">
              <Sparkles className="h-5 w-5" />
              Try for free
            </a>
          </Button>
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
                className="bg-gradient-to-br from-purple-soft to-muted rounded-2xl p-6 card-shadow hover:card-shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
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
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-center">
            Discover the platform
          </h2>
          
          <div className="flex flex-wrap justify-center gap-2">
            {platformTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          
          {platformTabs.map((tab) => (
            <motion.div
              key={tab.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: activeTab === tab.id ? 1 : 0 }}
              className={`${activeTab === tab.id ? "block" : "hidden"}`}
            >
              <div className="max-w-4xl mx-auto text-center space-y-6">
                <h3 className="text-2xl font-bold text-foreground">{tab.title}</h3>
                <p className="text-lg text-muted-foreground">{tab.description}</p>
                <Button asChild>
                  <a href="https://console.fynd.com/kaily/asia-south1/try-for-free?entry_page=%2F&__hstc=141944045.35e90d45e45f607b1d192eff22a85a1b.1767958078313.1767958078313.1767958078313.1&__hssc=141944045.1.1767958078313&__hsfp=4271721474" target="_blank" rel="noopener noreferrer">
                    Try for free
                  </a>
                </Button>
                
                <div className="bg-muted rounded-2xl p-4 lg:p-8 mt-8">
                  <div className="aspect-video bg-background rounded-xl flex items-center justify-center">
                    {tab.id === "builder" && <Settings className="h-16 w-16 text-muted-foreground/30" />}
                    {tab.id === "data" && <Database className="h-16 w-16 text-muted-foreground/30" />}
                    {tab.id === "workflows" && <Target className="h-16 w-16 text-muted-foreground/30" />}
                    {tab.id === "analytics" && <BarChart3 className="h-16 w-16 text-muted-foreground/30" />}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
