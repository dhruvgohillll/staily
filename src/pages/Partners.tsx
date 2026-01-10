import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Check, DollarSign, Globe, Heart, Rocket, Users, ArrowRight } from "lucide-react";

export default function Partners() {
    const benefits = [
        {
            icon: DollarSign,
            title: "Generous Commissions",
            description: "Earn up to 30% recurring revenue for every customer you refer to Staily."
        },
        {
            icon: Rocket,
            title: "Easy to Promote",
            description: "High-converting landing pages and marketing assets provided to help you succeed."
        },
        {
            icon: Globe,
            title: "Global Reach",
            description: "Join partners from over 50 countries spreading the word about AI automation."
        }
    ];

    const faqs = [
        {
            question: "How do payouts work?",
            answer: "We pay out commissions via PayPal or Stripe on the 1st of every month for the previous month's earnings. Minimum payout threshold is $50."
        },
        {
            question: "Is there a cost to join?",
            answer: "No, the Staily Partner Program is completely free to join. We want to reward you for helping us urge the world to adopt AI."
        },
        {
            question: "Can I refer myself?",
            answer: "Self-referrals are not allowed. The program is designed to reward you for bringing new customers to Staily."
        },
        {
            question: "How long is the cookie duration?",
            answer: "We offer a 60-day cookie window. If a user clicks your link and converts within 60 days, you get the credit."
        }
    ];

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navbar />

            <main className="flex-grow pt-24">
                {/* Hero Section */}
                <section className="relative overflow-hidden py-20 lg:py-32">
                    <div className="container mx-auto px-4 lg:px-8 relative z-10">
                        <div className="max-w-3xl mx-auto text-center">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                                    <Heart className="h-4 w-4 fill-primary" />
                                    Become a Partner
                                </div>
                                <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
                                    Grow with <span className="text-gradient">Staily</span>
                                </h1>
                                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                                    Join our partner program and earn recurring commissions by helping businesses transform with AI Agents.
                                </p>
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                    <Button size="lg" className="h-12 px-8 text-base bg-primary hover:bg-primary/90">
                                        Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                    <Button size="lg" variant="outline" className="h-12 px-8 text-base">
                                        Program Details
                                    </Button>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Background decoration */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10" />
                </section>

                {/* Benefits Grid */}
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4 lg:px-8">
                        <div className="grid md:grid-cols-3 gap-8">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={benefit.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-card border border-border p-8 rounded-2xl hover:shadow-lg transition-all"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                                        <benefit.icon className="h-6 w-6 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {benefit.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Program Types */}
                <section className="py-24">
                    <div className="container mx-auto px-4 lg:px-8">
                        <div className="text-center max-w-2xl mx-auto mb-16">
                            <h2 className="text-3xl font-bold mb-4">Choose Your Path</h2>
                            <p className="text-muted-foreground">Whether you're a content creator or an agency, we have a program for you.</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            {/* Affiliate Partner */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="p-8 rounded-2xl border border-border bg-card relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-full -mr-8 -mt-8" />
                                <h3 className="text-2xl font-bold mb-2">Affiliate Partner</h3>
                                <p className="text-sm text-primary font-medium mb-6">For Creators & Influencers</p>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-start gap-3">
                                        <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                                        <span className="text-muted-foreground">20% recurring commission for 12 months</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                                        <span className="text-muted-foreground">Instant access to marketing assets</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                                        <span className="text-muted-foreground">No minimum audience size</span>
                                    </li>
                                </ul>
                                <Button className="w-full" variant="outline">Join as Affiliate</Button>
                            </motion.div>

                            {/* Solution Partner */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="p-8 rounded-2xl border-2 border-primary bg-card/50 relative overflow-hidden shadow-xl"
                            >
                                <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg">
                                    MOST POPULAR
                                </div>
                                <h3 className="text-2xl font-bold mb-2">Solution Partner</h3>
                                <p className="text-sm text-primary font-medium mb-6">For Agencies & Consultants</p>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-start gap-3">
                                        <Check className="h-5 w-5 text-primary flex-shrink-0" />
                                        <span className="text-foreground font-medium">30% recurring commission forever</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Check className="h-5 w-5 text-primary flex-shrink-0" />
                                        <span className="text-foreground font-medium">Dedicated partner manager</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Check className="h-5 w-5 text-primary flex-shrink-0" />
                                        <span className="text-foreground font-medium">Co-marketing opportunities</span>
                                    </li>
                                </ul>
                                <Button className="w-full bg-primary hover:bg-primary/90">Apply as Partner</Button>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-24 bg-muted/30">
                    <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
                        <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
                        <div className="space-y-6">
                            {faqs.map((faq, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-card border border-border rounded-xl p-6"
                                >
                                    <h4 className="font-semibold text-lg mb-2">{faq.question}</h4>
                                    <p className="text-muted-foreground">{faq.answer}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24">
                    <div className="container mx-auto px-4 lg:px-8">
                        <div className="bg-primary text-primary-foreground rounded-3xl p-12 text-center relative overflow-hidden">
                            <div className="relative z-10 max-w-2xl mx-auto">
                                <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to start earning?</h2>
                                <p className="text-lg opacity-90 mb-8">
                                    Join hundreds of partners who are building their business with Staily.
                                </p>
                                <Button size="lg" variant="secondary" className="h-12 px-8 font-semibold text-primary">
                                    Become a Partner
                                </Button>
                            </div>

                            {/* Decorative circles */}
                            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
