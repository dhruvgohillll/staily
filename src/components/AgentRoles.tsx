import { motion } from "framer-motion";
import { Sparkles, ShoppingBag, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";

const roles = [
  {
    title: "Sales Representative",
    description: "Books meetings, engages leads and drives sales",
    gradient: "from-blue-100 to-purple-100",
  },
  {
    title: "Support Agent",
    description: "Provides 24x7 personalized support for every customer",
    gradient: "from-green-100 to-emerald-100",
  },
  {
    title: "Marketing Agent",
    description: "Ideates and sets-up full-fledged campaigns",
    gradient: "from-orange-100 to-yellow-100",
  },
];

export const AgentRoles = () => {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8 space-y-16">
        {/* Agent Templates */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              One agent, many hats, infinite possibilities
            </h2>
            <p className="text-lg text-muted-foreground">
              Make Staily your own with specialized templates for every role. Choose a template, tweak it for your brand, and drive results from the get-go
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {roles.map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`bg-gradient-to-br ${role.gradient} rounded-2xl p-6 card-shadow hover:card-shadow-lg transition-all hover:-translate-y-1`}
              >
                <div className="aspect-[4/3] bg-background/50 rounded-xl mb-4 flex items-center justify-center">
                  <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center">
                    <span className="text-3xl">👤</span>
                  </div>
                </div>
                <h3 className="font-semibold text-foreground mb-2">{role.title}</h3>
                <p className="text-sm text-muted-foreground">{role.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* AI Shopping Assistant */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-primary">
              <ShoppingBag className="h-4 w-4" />
              AI Shopping Assistant
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Engage every shopper
            </h2>
            <p className="text-lg text-muted-foreground">
              Drive every sale home. Staily talks to your shoppers with a singular purpose—giving them the best experience
            </p>
            <Button className="gap-2" asChild>
              <a href="https://console.fynd.com/kaily/asia-south1/try-for-free?entry_page=%2F&__hstc=141944045.35e90d45e45f607b1d192eff22a85a1b.1767958078313.1767958078313.1767958078313.1&__hssc=141944045.1.1767958078313&__hsfp=4271721474" target="_blank" rel="noopener noreferrer">
                <Sparkles className="h-5 w-5" />
                Try now
              </a>
            </Button>
          </div>
          <div className="bg-gradient-to-br from-purple-soft to-pink-100 rounded-3xl p-8 aspect-[4/3] flex items-center justify-center">
            <div className="w-24 h-24 bg-background rounded-2xl flex items-center justify-center shadow-lg">
              <ShoppingBag className="h-12 w-12 text-primary" />
            </div>
          </div>
        </motion.div>

        {/* AI Support Agent */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <div className="lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-primary">
              <Headphones className="h-4 w-4" />
              AI Support Agent
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Set a gold standard for your support
            </h2>
            <p className="text-lg text-muted-foreground">
              No more hold music. Staily steps in instantly and provides real help to every customer, 24x7, in 70+ languages
            </p>
            <Button className="gap-2" asChild>
              <a href="https://console.fynd.com/kaily/asia-south1/try-for-free?entry_page=%2F&__hstc=141944045.35e90d45e45f607b1d192eff22a85a1b.1767958078313.1767958078313.1767958078313.1&__hssc=141944045.1.1767958078313&__hsfp=4271721474" target="_blank" rel="noopener noreferrer">
                <Sparkles className="h-5 w-5" />
                Try now
              </a>
            </Button>
          </div>
          <div className="lg:order-1 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl p-8 aspect-[4/3] flex items-center justify-center">
            <div className="w-24 h-24 bg-background rounded-2xl flex items-center justify-center shadow-lg">
              <Headphones className="h-12 w-12 text-primary" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
