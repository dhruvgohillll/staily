import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Brain, Shield, Users, Sparkles, Quote } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const principles = [
  {
    icon: Heart,
    title: "Care meets code",
    description: "Every line of code we write serves one purpose: helping businesses build lasting relationships with their customers",
    color: "text-red-500",
    bgColor: "bg-red-500/10",
  },
  {
    icon: Brain,
    title: "Intelligence with purpose",
    description: "Our agents represent the next big leap in AI systems. They observe, learn, and adapt to each organization's unique context",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Shield,
    title: "Built for trust",
    description: "Staily is built on principles of transparency and reliability. It is designed in line with robust ethical frameworks that ensure safe, consistent operation",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: Users,
    title: "Community at heart",
    description: "Staily is all about fostering a community of forward-thinking businesses that value empathy and personality as much as they value intelligence",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
];

export default function AboutUs() {
  const heroRef = useRef(null);
  const whyRef = useRef(null);
  const visionRef = useRef(null);
  const principlesRef = useRef(null);
  const quoteRef = useRef(null);
  const ctaRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const whyInView = useInView(whyRef, { once: true, margin: "-100px" });
  const visionInView = useInView(visionRef, { once: true, margin: "-100px" });
  const principlesInView = useInView(principlesRef, { once: true, margin: "-100px" });
  const quoteInView = useInView(quoteRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              ref={heroRef}
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center space-y-6"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={heroInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium"
              >
                <Sparkles className="h-4 w-4" />
                About Staily
              </motion.div>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
                Who we are
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Staily</strong> is an AI agent with a difference. It is a labor of love designed with a clear goal: building an AI agent that feels smart yet personal. Not just a bot, but an AI teammate.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Why Staily Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              ref={whyRef}
              initial={{ opacity: 0, y: 30 }}
              animate={whyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto space-y-8"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Why Staily?
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Staily is our tech-led solution to innately human business problems. With it, we aim to combine AI's intelligence with human empathy and context-awareness to create the ultimate business resource--a 24x7 helper that knows your processes in and out and can respond to customers any time, in any language.
                </p>
                <p>
                  As we solve more real-world problems with Staily, our focus remains on process efficiency and customer satisfaction. Every new feature empowers Staily to not just help users, but build warm relationships and solve real-world problems.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              ref={visionRef}
              initial={{ opacity: 0, y: 30 }}
              animate={visionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto space-y-8"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Our vision
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                In a world where AI is reshaping business operations, we're taking a fundamentally different approach.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe the future of AI lies in autonomous agents that don't just automate - they understand context, think independently, and genuinely care about outcomes.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Principles Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              ref={principlesRef}
              initial={{ opacity: 0 }}
              animate={principlesInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-6xl mx-auto space-y-12"
            >
              <div className="text-center space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                  Our Principles
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {principles.map((principle, index) => {
                  const Icon = principle.icon;
                  return (
                    <motion.div
                      key={principle.title}
                      initial={{ opacity: 0, y: 30, scale: 0.9 }}
                      animate={principlesInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
                      transition={{ 
                        delay: index * 0.1,
                        duration: 0.5,
                        type: "spring",
                        stiffness: 100
                      }}
                      whileHover={{ 
                        y: -8, 
                        scale: 1.02,
                        transition: { duration: 0.2 }
                      }}
                      className="bg-card rounded-2xl p-6 lg:p-8 border border-border hover:border-primary/50 transition-all cursor-pointer group"
                    >
                      <motion.div
                        className={`w-12 h-12 ${principle.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                        whileHover={{ rotate: 5 }}
                      >
                        <Icon className={`h-6 w-6 ${principle.color}`} />
                      </motion.div>
                      <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {principle.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {principle.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              ref={quoteRef}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={quoteInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-gradient-to-br from-primary/10 via-muted to-background rounded-2xl p-8 lg:p-12 border border-border relative overflow-hidden">
                <motion.div
                  className="absolute top-4 right-4 opacity-20"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Quote className="h-24 w-24 text-primary" />
                </motion.div>
                <div className="relative z-10">
                  <blockquote className="text-2xl lg:text-3xl font-semibold text-foreground mb-6 leading-relaxed">
                    "The future belongs to AI agents that can think and act independently. We're building a platform that lets every business create and deploy agents that own every customer interaction."
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-primary font-bold text-lg">SMG</span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">SMG</div>
                      <div className="text-sm text-muted-foreground">Founder</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              ref={ctaRef}
              initial={{ opacity: 0, y: 30 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center space-y-8"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                We'd love to hear from you
              </h2>
              <p className="text-lg text-muted-foreground">
                Have questions or want to learn more? Reach out to us and let's start a conversation.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <motion.a
                  href="mailto:support@staily.ai"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  <Sparkles className="h-5 w-5" />
                  Write to us
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-background border-2 border-border rounded-lg font-medium hover:border-primary transition-colors"
                >
                  Schedule a call
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

