import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ChevronRight, Search, Book, Code, Terminal, Zap, Settings, LayoutDashboard, Database, MessageSquare, Shield, Users, Globe, PlayCircle, Mic, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";

const sidebarItems = [
    {
        title: "Introduction",
        icon: Book,
        items: [
            { id: "overview", label: "Overview" },
            { id: "quickstart", label: "Quickstart" },
        ],
    },
    {
        title: "Platform",
        icon: LayoutDashboard,
        items: [
            { id: "dashboard", label: "Dashboard" },
            { id: "create-copilot", label: "Create Copilot" },
            { id: "inbox", label: "Inbox" },
            { id: "datasources", label: "Datasources" },
            { id: "deployments", label: "Deployments" },
        ],
    },
    {
        title: "Agent Settings",
        icon: Settings,
        items: [
            { id: "basic-info", label: "Basic Info" },
            { id: "appearance", label: "Appearance" },
            { id: "greetings", label: "Greetings" },
            { id: "ai-voice", label: "AI Voice" },
            { id: "ai-video", label: "AI Video" },
            { id: "human-handoff", label: "Human Handoff" },
        ],
    },
    {
        title: "Development",
        icon: Code,
        items: [
            { id: "react-widget", label: "React Widget" },
            { id: "ai-actions", label: "AI Actions" },
            { id: "integrations", label: "Integrations" },
        ],
    },
    {
        title: "Support",
        icon: Shield,
        items: [
            { id: "manage-account", label: "Manage Account" },
            { id: "faq", label: "FAQ" },
        ],
    },
];

const contentMap: Record<string, { title: string; content: React.ReactNode }> = {
    overview: {
        title: "Overview",
        content: (
            <div className="space-y-8">
                <div className="prose prose-zinc dark:prose-invert max-w-none">
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        Staily is the all-in-one AI Agent platform designed to transform how businesses interact with their customers. Build, deploy, and manage autonomous agents that don't just chat—they act.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="group p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-all hover:border-primary/50">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform">
                            <Zap className="h-5 w-5" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Autonomous Actions</h3>
                        <p className="text-muted-foreground text-sm">
                            Beyond simple Q&A. Staily agents can call APIs, book meetings, and update CRMs autonomously.
                        </p>
                    </div>
                    <div className="group p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-all hover:border-primary/50">
                        <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 text-blue-500 group-hover:scale-110 transition-transform">
                            <Globe className="h-5 w-5" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Omnichannel</h3>
                        <p className="text-muted-foreground text-sm">
                            Deploy once, run everywhere. Website, WhatsApp, Slack, Email, and Voice channels supported out of the box.
                        </p>
                    </div>
                    <div className="group p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-all hover:border-primary/50">
                        <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center mb-4 text-green-500 group-hover:scale-110 transition-transform">
                            <Database className="h-5 w-5" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Custom Knowledge</h3>
                        <p className="text-muted-foreground text-sm">
                            Train on your own data. Upload PDFs, crawl websites, or connect your Notion workspace.
                        </p>
                    </div>
                    <div className="group p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-all hover:border-primary/50">
                        <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4 text-purple-500 group-hover:scale-110 transition-transform">
                            <Shield className="h-5 w-5" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Enterprise Secure</h3>
                        <p className="text-muted-foreground text-sm">
                            SOC 2 Type II compliant, GDPR ready, and built with data privacy as a first principle.
                        </p>
                    </div>
                </div>

                <div className="bg-muted/30 rounded-2xl p-8 border border-border">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <Terminal className="h-5 w-5 text-primary" />
                        Why Developers Love Staily
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="space-y-2">
                            <div className="font-medium text-foreground">API First</div>
                            <p className="text-sm text-muted-foreground">Everything is available via our REST API. Build custom interfaces or integrate deep into your product.</p>
                        </div>
                        <div className="space-y-2">
                            <div className="font-medium text-foreground">React Widget</div>
                            <p className="text-sm text-muted-foreground">Drop-in component for React apps with full theming support and TypeScript definitions.</p>
                        </div>
                        <div className="space-y-2">
                            <div className="font-medium text-foreground">Webhooks</div>
                            <p className="text-sm text-muted-foreground">Real-time events for every interaction. Trigger workflows in your own backend.</p>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    quickstart: {
        title: "Quickstart",
        content: (
            <div className="space-y-6">
                <p className="text-lg text-muted-foreground">
                    Get your first AI agent up and running in less than 5 minutes.
                </p>
                <ol className="space-y-4 list-decimal list-inside text-muted-foreground">
                    <li className="p-4 bg-muted/30 rounded-lg border border-border">
                        <strong className="text-foreground">Create an Account:</strong> Sign up at use.staily.ai.
                    </li>
                    <li className="p-4 bg-muted/30 rounded-lg border border-border">
                        <strong className="text-foreground">Create a Copilot:</strong> Click "New Copilot" and give your agent a name and persona.
                    </li>
                    <li className="p-4 bg-muted/30 rounded-lg border border-border">
                        <strong className="text-foreground">Add Knowledge:</strong> Upload a PDF or enter your website URL in the Datasources tab.
                    </li>
                    <li className="p-4 bg-muted/30 rounded-lg border border-border">
                        <strong className="text-foreground">Test & Deploy:</strong> Use the preview pane to test, then copy the embed code to your site.
                    </li>
                </ol>
            </div>
        ),
    },
    dashboard: {
        title: "Dashboard Overview",
        content: (
            <div className="space-y-8">
                <p className="text-lg text-muted-foreground">
                    The Dashboard provides a comprehensive real-time view of your AI Agent's performance, health, and engagement metrics.
                </p>

                {/* Agent Info Card */}
                <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <Settings className="h-5 w-5 text-primary" />
                        AI Agent Information
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="p-3 bg-muted/20 rounded-lg">
                            <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-1">Status</div>
                            <div className="flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                                <span className="font-medium">Active</span>
                            </div>
                        </div>
                        <div className="p-3 bg-muted/20 rounded-lg">
                            <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-1">Last Synced</div>
                            <div className="font-medium">Just now</div>
                        </div>
                        <div className="p-3 bg-muted/20 rounded-lg">
                            <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-1">Model</div>
                            <div className="font-medium">GPT-4 Turbo</div>
                        </div>
                        <div className="p-3 bg-muted/20 rounded-lg">
                            <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-1">Plan</div>
                            <div className="font-medium">Kaily Pro</div>
                        </div>
                    </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-6 rounded-xl border border-border bg-card">
                        <h4 className="font-medium text-muted-foreground mb-2">Total Conversations</h4>
                        <div className="text-3xl font-bold">1,284</div>
                        <div className="text-sm text-green-500 mt-1 flex items-center gap-1">
                            ↑ 12% vs last week
                        </div>
                    </div>
                    <div className="p-6 rounded-xl border border-border bg-card">
                        <h4 className="font-medium text-muted-foreground mb-2">Messages Exchanged</h4>
                        <div className="text-3xl font-bold">14.2k</div>
                        <div className="text-sm text-green-500 mt-1 flex items-center gap-1">
                            ↑ 8% vs last week
                        </div>
                    </div>
                    <div className="p-6 rounded-xl border border-border bg-card">
                        <h4 className="font-medium text-muted-foreground mb-2">Avg. Response Time</h4>
                        <div className="text-3xl font-bold">1.2s</div>
                        <div className="text-sm text-muted-foreground mt-1">
                            Consistent
                        </div>
                    </div>
                </div>

                {/* Sentiment & Topics */}
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl border border-border bg-card">
                        <h3 className="text-lg font-semibold mb-4">Sentiment Analysis</h3>
                        <div className="space-y-4">
                            <div className="space-y-1">
                                <div className="flex justify-between text-sm">
                                    <span>Positive</span>
                                    <span className="font-medium">65%</span>
                                </div>
                                <div className="h-2 rounded-full bg-muted overflow-hidden">
                                    <div className="h-full bg-green-500 w-[65%]"></div>
                                </div>
                            </div>
                            <div className="space-y-1">
                                <div className="flex justify-between text-sm">
                                    <span>Neutral</span>
                                    <span className="font-medium">25%</span>
                                </div>
                                <div className="h-2 rounded-full bg-muted overflow-hidden">
                                    <div className="h-full bg-yellow-500 w-[25%]"></div>
                                </div>
                            </div>
                            <div className="space-y-1">
                                <div className="flex justify-between text-sm">
                                    <span>Negative</span>
                                    <span className="font-medium">10%</span>
                                </div>
                                <div className="h-2 rounded-full bg-muted overflow-hidden">
                                    <div className="h-full bg-red-500 w-[10%]"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-border bg-card">
                        <h3 className="text-lg font-semibold mb-4">Top Topics</h3>
                        <div className="space-y-3">
                            {['Pricing Inquiry', 'Integration Help', 'Account Setup', 'API Usage'].map((topic, i) => (
                                <div key={topic} className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 transition-colors">
                                    <span className="text-sm font-medium">{topic}</span>
                                    <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">{120 - i * 20} threads</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    "create-copilot": {
        title: "Create Copilot",
        content: (
            <div className="space-y-6">
                <p className="text-muted-foreground">
                    Creating a copilot is the first step. You can choose from pre-built templates for Support, Sales, or Booking, or start from scratch.
                </p>
                <div className="bg-primary/5 border border-primary/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-primary mb-2">Tip</h4>
                    <p className="text-sm text-muted-foreground">Give your copilot a distinct personality in the System Prompt section to align with your brand voice.</p>
                </div>
            </div>
        ),
    },
    inbox: {
        title: "Inbox",
        content: (
            <div className="space-y-6">
                <p className="text-muted-foreground">
                    The Inbox allows you to view live conversations. You can perform <strong>Human Takeover</strong> here if the AI needs assistance.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                    <li>• Filter by Status (Open, Resolved, Bot Handled)</li>
                    <li>• Assign conversations to team members</li>
                    <li>• View user context and history</li>
                </ul>
            </div>
        ),
    },
    datasources: {
        title: "Datasources",
        content: (
            <div className="space-y-6">
                <p className="text-muted-foreground">
                    Teach your AI. Staily supports various data sources to ground your agent's responses.
                </p>
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-card border border-border p-4 rounded-lg">
                        <Globe className="h-6 w-6 mb-2 text-primary" />
                        <h4 className="font-semibold">Website Crawling</h4>
                        <p className="text-sm text-muted-foreground">Enter a URL and we'll scrape the content.</p>
                    </div>
                    <div className="bg-card border border-border p-4 rounded-lg">
                        <Database className="h-6 w-6 mb-2 text-primary" />
                        <h4 className="font-semibold">Files</h4>
                        <p className="text-sm text-muted-foreground">Upload PDFs, DOCX, or TXT files.</p>
                    </div>
                    <div className="bg-card border border-border p-4 rounded-lg">
                        <MessageSquare className="h-6 w-6 mb-2 text-primary" />
                        <h4 className="font-semibold">Q&A Pairs</h4>
                        <p className="text-sm text-muted-foreground">Manually add specific questions and answers.</p>
                    </div>
                </div>
            </div>
        ),
    },
    deployments: {
        title: "Deployments",
        content: (
            <div className="space-y-6">
                <p className="text-muted-foreground">
                    Deploy your agent anywhere.
                </p>
                <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 border border-border rounded-lg">
                        <Globe className="h-5 w-5" />
                        <span><strong>Web Widget:</strong> Embed via a simple script tag.</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 border border-border rounded-lg">
                        <MessageSquare className="h-5 w-5" />
                        <span><strong>WhatsApp:</strong> Connect via Twilio or Cloud API.</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 border border-border rounded-lg">
                        <Settings className="h-5 w-5" />
                        <span><strong>Slack:</strong> Add to your internal workspace.</span>
                    </div>
                </div>
            </div>
        ),
    },
    "basic-info": {
        title: "Basic Info",
        content: (
            <div className="space-y-6">
                <p className="text-muted-foreground">
                    Configure the core identity of your agent.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                    <li><strong>Name:</strong> The internal name for your dashboard.</li>
                    <li><strong>Public Name:</strong> The name users see in the chat window.</li>
                    <li><strong>Description:</strong> A short bio for your agent.</li>
                </ul>
            </div>
        ),
    },
    appearance: {
        title: "Appearance",
        content: (
            <div className="space-y-6">
                <p className="text-muted-foreground">
                    Customize the look and feel to match your brand.
                </p>
                <div className="bg-muted p-4 rounded-xl space-y-4">
                    <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                            <Palette className="h-5 w-5" />
                        </div>
                        <div>
                            <h4 className="font-medium">Brand Color</h4>
                            <p className="text-sm text-muted-foreground">Set the primary color for the chat bubble and buttons.</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                            <MessageSquare className="h-5 w-5" />
                        </div>
                        <div>
                            <h4 className="font-medium">Launcher Icon</h4>
                            <p className="text-sm text-muted-foreground">Choose a custom icon or upload your own logo.</p>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    greetings: {
        title: "Greetings",
        content: (
            <div className="space-y-6">
                <p className="text-muted-foreground">
                    Set the first message your user sees.
                </p>
                <div className="border-l-4 border-primary pl-4 py-2 bg-muted/20">
                    <p className="italic">"Hi there! 👋 How can I help you regarding our products today?"</p>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                    You can also configure <strong>suggested messages</strong> (chips) to help users start the conversation easily.
                </p>
            </div>
        ),
    },
    "ai-voice": {
        title: "AI Voice",
        content: (
            <div className="space-y-6">
                <p className="text-muted-foreground">
                    Enable voice interactions for your agent. Staily integrates with top voice providers like ElevenLabs and Play.ht.
                </p>
                <div className="flex items-center gap-3 p-4 border border-border rounded-lg bg-card">
                    <Mic className="h-6 w-6 text-primary" />
                    <div>
                        <h4 className="font-semibold">Voice Settings</h4>
                        <p className="text-sm text-muted-foreground">Choose stability, clarity enhancement, and speaking style.</p>
                    </div>
                </div>
            </div>
        ),
    },
    "ai-video": {
        title: "AI Video",
        content: (
            <div className="space-y-6">
                <p className="text-muted-foreground">
                    Create a video avatar that speaks your responses in real-time.
                </p>
                <div className="rounded-lg overflow-hidden border border-border">
                    <div className="bg-muted h-48 flex items-center justify-center">
                        <PlayCircle className="h-12 w-12 text-muted-foreground" />
                    </div>
                    <div className="p-4">
                        <p className="text-sm text-muted-foreground">Select from our library of avatars or upload a custom one (Enterprise).</p>
                    </div>
                </div>
            </div>
        ),
    },
    "human-handoff": {
        title: "Human Handoff",
        content: (
            <div className="space-y-6">
                <p className="text-muted-foreground">
                    Define when the AI should step back and alert a human agent.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                    <li><strong>Sentiment Analysis:</strong> Trigger handoff if user seems angry.</li>
                    <li><strong>Keyword Trigger:</strong> Handoff if user types "talk to human" or "support".</li>
                    <li><strong>Unknown Queries:</strong> configuration for when the AI doesn't know the answer.</li>
                </ul>
            </div>
        ),
    },
    "react-widget": {
        title: "React Widget",
        content: (
            <div className="space-y-6">
                <p className="text-muted-foreground">
                    Embed Staily natively in your React application.
                </p>
                <div className="bg-zinc-950 text-zinc-50 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                    <pre>{`import { StailyWidget } from '@staily/react-widget';

export default function App() {
  return (
    <StailyWidget 
      apiKey="YOUR_API_KEY"
      agentId="AGENT_ID"
      theme={{ primaryColor: '#2563eb' }}
    />
  );
}`}</pre>
                </div>
            </div>
        ),
    },
    "ai-actions": {
        title: "AI Actions",
        content: (
            <div className="space-y-6">
                <p className="text-muted-foreground">
                    Give your agent the power to DO things, not just talk.
                </p>
                <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                        Define tools using OpenAPI specifications or simple JSON definitions. The agent can verify availability, book meetings, or query your database.
                    </p>
                </div>
            </div>
        ),
    },
    integrations: {
        title: "Integrations",
        content: (
            <div className="space-y-6">
                <p className="text-muted-foreground">
                    Connect Staily with your favorite tools.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {['Zapier', 'Shopify', 'Salesforce', 'HubSpot', 'Notion', 'Slack'].map(tool => (
                        <div key={tool} className="p-3 border border-border rounded-lg text-center font-medium bg-card">
                            {tool}
                        </div>
                    ))}
                </div>
            </div>
        ),
    },
    "manage-account": {
        title: "Manage Account",
        content: (
            <div className="space-y-6">
                <p className="text-muted-foreground">
                    Handle your billing, team members, and security settings.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                    <li>• <strong>Plan & Billing:</strong> View invoices and upgrade plans.</li>
                    <li>• <strong>Team:</strong> Invite members and set RBAC roles.</li>
                    <li>• <strong>API Keys:</strong> Generate and revoke access tokens.</li>
                </ul>
            </div>
        ),
    },
    faq: {
        title: "FAQ",
        content: (
            <div className="space-y-6">
                <div className="space-y-4">
                    <div>
                        <h4 className="font-semibold mb-1">Is Staily free?</h4>
                        <p className="text-sm text-muted-foreground">We offer a free tier for developers and hobbyists. See Pricing for details.</p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-1">Can I self-host?</h4>
                        <p className="text-sm text-muted-foreground">Self-hosting is available on our Enterprise plan.</p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-1">What languages are supported?</h4>
                        <p className="text-sm text-muted-foreground">Staily supports over 50 languages including English, Spanish, French, German, and Japanese.</p>
                    </div>
                </div>
            </div>
        ),
    },
};

export default function Docs() {
    const [activeTab, setActiveTab] = useState("overview");

    const activeContent = contentMap[activeTab] || contentMap.overview;

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navbar />
            <div className="flex-grow pt-20 lg:pt-24 flex container mx-auto px-4 lg:px-8 gap-8">

                {/* Sidebar */}
                <aside className="hidden lg:block w-64 flex-shrink-0 sticky top-24 h-[calc(100vh-6rem)] overflow-y-auto pb-10 pr-4 border-r border-border/50 scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent">
                    <div className="mb-6 relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Search docs..."
                            className="w-full pl-9 pr-4 py-2 bg-muted/50 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all"
                        />
                    </div>
                    <nav className="space-y-8">
                        {sidebarItems.map((section) => (
                            <div key={section.title}>
                                <div className="flex items-center gap-2 mb-3 px-2">
                                    <section.icon className="h-4 w-4 text-primary" />
                                    <h4 className="font-semibold text-sm text-foreground uppercase tracking-wider">
                                        {section.title}
                                    </h4>
                                </div>
                                <ul className="space-y-1">
                                    {section.items.map((item) => (
                                        <li key={item.id}>
                                            <button
                                                onClick={() => setActiveTab(item.id)}
                                                className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${activeTab === item.id
                                                    ? "bg-primary/10 text-primary font-medium"
                                                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                                                    }`}
                                            >
                                                {item.label}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </nav>
                </aside>

                {/* Main Content */}
                <main className="flex-grow pb-16 min-w-0">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="max-w-3xl"
                    >
                        <div className="flex items-center text-sm text-muted-foreground mb-6 gap-2">
                            <span className="cursor-pointer hover:text-foreground">Docs</span>
                            <ChevronRight className="h-4 w-4" />
                            <span className="text-foreground font-medium">{activeContent.title}</span>
                        </div>

                        <h1 className="text-4xl font-bold text-foreground mb-6">
                            {activeContent.title}
                        </h1>

                        <div className="prose prose-zinc dark:prose-invert max-w-none">
                            {/* This is where the content renders */}
                            {activeContent.content}
                        </div>

                        <div className="mt-12 pt-8 border-t border-border flex justify-between">
                            {/* Simple navigation - logic could be enhanced to find prev/next items */}
                            <Button variant="outline" size="sm" onClick={() => setActiveTab("overview")}>
                                Back to Overview
                            </Button>
                        </div>
                    </motion.div>
                </main>
            </div>
            <Footer />
        </div>
    );
}
