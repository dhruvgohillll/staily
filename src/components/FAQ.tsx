import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Who is Staily?",
    answer: "Staily is a conversational AI agent platform that automates customer support, sales, and marketing tasks across chat, voice, email, and WhatsApp—without code",
  },
  {
    question: "How does Staily differ from traditional chatbots?",
    answer: "Staily is an AI agent, not a chatbot—automating workflows, integrating with CRMs, ecommerce, and Slack for smarter customer engagement.",
  },
  {
    question: "Can Staily integrate with my existing CRM or OMS?",
    answer: "Yes. Staily offers native integrations with leading CRMs, order-management systems, ecommerce platforms, and Slack. Custom API hooks let you connect virtually any tool.",
  },
  {
    question: "Is Staily data-secure and compliant?",
    answer: "Absolutely. Staily follows enterprise-grade security standards, including SOC 2 Type II certification, GDPR compliance, and end-to-end data encryption.",
  },
  {
    question: "Does Staily support voice and WhatsApp bots?",
    answer: "Yes. Staily enables you to deploy AI voice agents for 24×7 call center support and WhatsApp bots for automated messaging, order tracking, and promotions—all from one dashboard.",
  },
  {
    question: "Can human agents take over an AI chat mid-conversation?",
    answer: "Staily enables seamless human handoff. Agents can jump into live chats or voice calls with full context and conversation history.",
  },
  {
    question: "How fast can I deploy an AI agent on my website?",
    answer: "You can customize and launch Staily in under 3 minutes! All you need to do is sign up, configure your agent, and choose deployment channels.",
  },
  {
    question: "Can Staily handle multilingual conversations?",
    answer: "Yes. The platform supports 100+ languages, letting you deliver global support without extra translation tools.",
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              You can reach out to us for queries via{" "}
              <a href="mailto:support@staily.ai" className="text-primary hover:underline">
                support@staily.ai
              </a>
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.08,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ scale: 1.02, y: -2 }}
                className="bg-card rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <motion.button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-4 lg:p-6 text-left hover:bg-muted/50 transition-colors"
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="font-medium text-foreground pr-4">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <ChevronDown className="h-5 w-5 text-muted-foreground shrink-0" />
                  </motion.div>
                </motion.button>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="px-4 lg:px-6 pb-4 lg:pb-6"
                  >
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="text-muted-foreground"
                    >
                      {faq.answer}
                    </motion.p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
