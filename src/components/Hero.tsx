import { Sparkles, Play, MessageSquare, Phone, Globe, Smartphone, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-woman.jpg";

const deployChannels = [
  { icon: MessageSquare, label: "WhatsApp" },
  { icon: Globe, label: "Website Chatbot" },
  { icon: Smartphone, label: "Mobile Apps" },
  { icon: Phone, label: "AI Voice Calls" },
  { icon: Users, label: "Public Webpage" },
];

const tabs = [
  { label: "Your best sales agent", active: true },
  { label: "Your team's support hero", active: false },
  { label: "A smart workflow wizard", active: false },
];

export const Hero = () => {
  return (
    <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient -z-10" />
      
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Badges */}
            <div className="flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-background rounded-full badge-shadow border border-border">
                <div className="w-5 h-5 rounded bg-orange-500 flex items-center justify-center text-xs font-bold text-white">P</div>
                <span className="text-sm font-medium text-muted-foreground">#3 Product of the day</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-background rounded-full badge-shadow border border-border">
                <div className="w-5 h-5 rounded bg-red-500 flex items-center justify-center text-xs font-bold text-white">G</div>
                <span className="text-sm font-medium text-muted-foreground">Rated 4.8 out of 5 on G2</span>
              </div>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                The AI agent that goes beyond the chatbox
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Meet Staily, the AI agent that gets real work done. It sells, resolves, and automates daily tasks in a flash
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2 px-8 h-14 text-base" asChild>
                <a href="https://console.fynd.com/kaily/asia-south1/try-for-free?entry_page=%2F&__hstc=141944045.35e90d45e45f607b1d192eff22a85a1b.1767958078313.1767958078313.1767958078313.1&__hssc=141944045.1.1767958078313&__hsfp=4271721474" target="_blank" rel="noopener noreferrer">
                  <Sparkles className="h-5 w-5" />
                  Try for free
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 px-8 h-14 text-base border-2">
                <Play className="h-5 w-5" />
                Watch Video
              </Button>
            </div>

            {/* Deploy Channels */}
            <div className="space-y-4">
              <p className="text-sm font-medium text-muted-foreground">Deploy your AI agents seamlessly</p>
              <div className="flex flex-wrap gap-3">
                {deployChannels.map((channel) => (
                  <div
                    key={channel.label}
                    className="flex items-center gap-2 px-4 py-2 bg-background rounded-lg border border-border hover:border-primary/30 transition-colors cursor-pointer"
                  >
                    <channel.icon className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{channel.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Content - Hero Image with Chat UI */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-amber-100 to-orange-100 aspect-[4/3] lg:aspect-square">
              <img
                src={heroImage}
                alt="Woman using AI assistant on phone"
                className="w-full h-full object-cover"
              />
              
              {/* Chat Widget Overlay */}
              <div className="absolute right-4 top-8 w-64 bg-background rounded-2xl shadow-2xl border border-border overflow-hidden">
                {/* Chat Header */}
                <div className="flex items-center gap-2 p-3 border-b border-border">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">Staily</span>
                  <button className="ml-auto text-muted-foreground hover:text-foreground">×</button>
                </div>
                
                {/* Chat Messages */}
                <div className="p-3 space-y-3">
                  <div className="flex justify-end">
                    <div className="bg-muted rounded-2xl rounded-tr-sm px-3 py-2 max-w-[85%]">
                      <p className="text-xs">I need headphones that compliment my outfits well.</p>
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-primary text-primary-foreground rounded-2xl rounded-tl-sm px-3 py-2 max-w-[85%]">
                      <p className="text-xs">Sure! Here are some great options for you...</p>
                    </div>
                  </div>
                  
                  {/* Product Cards */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-muted rounded-xl p-2 text-center">
                      <div className="w-full aspect-square bg-purple-soft rounded-lg mb-1"></div>
                      <p className="text-[10px] font-medium truncate">BeatMaster Pink</p>
                      <button className="w-full mt-1 py-1 bg-primary text-primary-foreground rounded text-[9px] font-medium">Add to cart</button>
                    </div>
                    <div className="bg-muted rounded-xl p-2 text-center">
                      <div className="w-full aspect-square bg-purple-soft rounded-lg mb-1"></div>
                      <p className="text-[10px] font-medium truncate">SoundMax Grey</p>
                      <button className="w-full mt-1 py-1 bg-primary text-primary-foreground rounded text-[9px] font-medium">Add to cart</button>
                    </div>
                  </div>
                </div>
                
                {/* Chat Input */}
                <div className="p-2 border-t border-border">
                  <div className="flex items-center gap-2 bg-muted rounded-full px-3 py-2">
                    <span className="text-xs text-muted-foreground">Type message here...</span>
                    <div className="ml-auto flex gap-1">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-[8px]">🎤</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tab Pills */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex gap-2 bg-foreground/90 rounded-full p-1.5 backdrop-blur">
                  {tabs.map((tab) => (
                    <button
                      key={tab.label}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                        tab.active
                          ? "bg-background text-foreground"
                          : "text-background/70 hover:text-background"
                      }`}
                    >
                      <div className={`w-3 h-3 rounded-full border-2 ${tab.active ? "border-green-500 bg-green-500" : "border-current"}`} />
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
