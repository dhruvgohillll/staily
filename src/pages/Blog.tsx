import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, Calendar, User, Tag } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
    {
        id: 1,
        title: "The Future of AI Agents in Customer Support",
        excerpt: "Discover how autonomous AI agents are transforming the customer support landscape, moving beyond simple chatbots to intelligent problem solvers.",
        category: "AI Trends",
        author: "Sarah Chen",
        date: "Jan 10, 2024",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: 2,
        title: "Building Trust with Transparent AI Systems",
        excerpt: "Why explainability and transparency are crucial for the adoption of AI in enterprise environments and how Staily approaches these challenges.",
        category: "Ethics",
        author: "David Miller",
        date: "Jan 08, 2024",
        readTime: "4 min read",
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: 3,
        title: "Optimizing Workflow Automation with LLMs",
        excerpt: "A deep dive into best practices for implementing Large Language Models to streamline complex business workflows and increase efficiency.",
        category: "Engineering",
        author: "Alex Thompson",
        date: "Jan 05, 2024",
        readTime: "7 min read",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: 4,
        title: "The Rise of Conversational Commerce",
        excerpt: "How AI-driven conversations are reshaping the e-commerce experience, driving sales, and improving customer satisfaction.",
        category: "E-commerce",
        author: "Emily White",
        date: "Dec 28, 2023",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: 5,
        title: "Comparing Top Chatbot Frameworks for 2024",
        excerpt: "An in-depth analysis of the leading chatbot development frameworks, their pros and cons, and which one is right for your business.",
        category: "Development",
        author: "Michael Brown",
        date: "Dec 20, 2023",
        readTime: "8 min read",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: 6,
        title: "Scaling AI Operations: A Guide for CTOs",
        excerpt: "Key strategies and considerations for technical leaders looking to scale their AI initiatives across the organization effectively.",
        category: "Strategy",
        author: "Rachel Lee",
        date: "Dec 15, 2023",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800",
    },
];

export default function Blog() {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navbar />
            <main className="flex-grow pt-24 lg:pt-32 pb-16">
                {/* Header Section */}
                <section className="container mx-auto px-4 lg:px-8 mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto text-center space-y-6"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            Our Blog
                        </div>
                        <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
                            Insights & Updates
                        </h1>
                        <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                            Our team blog covering all things AI, agentic workflows, and the future of work.
                        </p>
                    </motion.div>
                </section>

                {/* Blog Grid */}
                <section className="container mx-auto px-4 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post, index) => (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group flex flex-col bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all hover:border-primary/50"
                            >
                                {/* Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-background/90 backdrop-blur-sm text-xs font-medium rounded-full border border-border/50 shadow-sm">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex flex-col flex-grow p-6 space-y-4">
                                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="h-3 w-3" />
                                            {post.date}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <User className="h-3 w-3" />
                                            {post.author}
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                                        <Link to="#" className="focus:outline-none">
                                            <span className="absolute inset-0 z-10" aria-hidden="true" />
                                            {post.title}
                                        </Link>
                                    </h3>

                                    <p className="text-muted-foreground text-sm line-clamp-3 flex-grow">
                                        {post.excerpt}
                                    </p>

                                    <div className="pt-4 mt-auto flex items-center justify-between border-t border-border/50">
                                        <span className="text-xs text-muted-foreground font-medium">
                                            {post.readTime}
                                        </span>
                                        <span className="text-sm font-medium text-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                            Read article
                                            <ArrowRight className="h-4 w-4" />
                                        </span>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </section>

                {/* Categories / Newsletter CTA could go here */}
            </main>
            <Footer />
        </div>
    );
}
