import { useState, useRef, useEffect } from "react";
import { ChevronDown, Menu, X, Sparkles, Calendar, BookOpen, Lightbulb, Users, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { LoginDialog } from "@/components/LoginDialog";
import { CalendarDialog } from "@/components/CalendarDialog";
import { useAuth } from "@/contexts/AuthContext";
import { Link } from "react-router-dom";

const navItems = [
  { label: "Product", hasDropdown: true },
  { label: "Solutions", hasDropdown: true },
  { label: "Tools", hasDropdown: true },
  { label: "Pricing", hasDropdown: false },
  { label: "Resources", hasDropdown: true },
];

const resourcesOptions = [
  {
    id: "docs",
    title: "Documentation",
    description: "Learn how to use Staily",
    icon: BookOpen,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    links: [
      { label: "Getting Started", href: "/docs" },
      { label: "API Reference", href: "/docs" },
      { label: "Guides", href: "/docs" },
    ],
  },
  {
    id: "learn",
    title: "Learn & Insights",
    description: "Explore resources and best practices",
    icon: Lightbulb,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Case Studies", href: "#" },
      { label: "Webinars", href: "#" },
    ],
  },
  {
    id: "community",
    title: "Community",
    description: "Connect with other users",
    icon: Users,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    links: [
      { label: "Community Forum", href: "#" },
      { label: "Discord", href: "#" },
      { label: "Partners Program", href: "/partners" },
    ],
  },
  {
    id: "about",
    title: "About Us",
    description: "Learn more about Staily",
    icon: Info,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    links: [
      { label: "Our Story", href: "/about-us" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
];

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginDialogOpen, setLoginDialogOpen] = useState(false);
  const [calendarDialogOpen, setCalendarDialogOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const resourcesRef = useRef<HTMLDivElement>(null);
  const { user, logout, isAuthenticated, loginWithGoogle } = useAuth();

  // Close Resources dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (resourcesRef.current && !resourcesRef.current.contains(event.target as Node)) {
        setResourcesOpen(false);
      }
    };

    if (resourcesOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [resourcesOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-foreground">staily</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              item.label === "Resources" ? (
                <div key={item.label} ref={resourcesRef} className="relative">
                  <button
                    onClick={() => setResourcesOpen(!resourcesOpen)}
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors ${resourcesOpen
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                      }`}
                  >
                    {item.label}
                    <motion.div
                      animate={{ rotate: resourcesOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </motion.div>
                  </button>

                  {/* Resources Dropdown */}
                  <AnimatePresence>
                    {resourcesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full left-0 mt-2 w-[600px] bg-background border border-border rounded-xl shadow-lg p-6 z-50"
                      >
                        <div className="grid grid-cols-2 gap-4">
                          {resourcesOptions.map((option, index) => {
                            const Icon = option.icon;
                            const mainLink = option.links[0]?.href || "#";
                            const isInternalLink = mainLink.startsWith("/");

                            const Content = (
                              <>
                                <div className="flex items-start gap-3">
                                  <motion.div
                                    className={`w-10 h-10 rounded-lg ${option.bgColor} flex items-center justify-center flex-shrink-0`}
                                    whileHover={{ rotate: 5, scale: 1.1 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                  >
                                    <Icon className={`h-5 w-5 ${option.color}`} />
                                  </motion.div>
                                  <div className="flex-1 min-w-0">
                                    <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                                      {option.title}
                                    </h3>
                                    <p className="text-xs text-muted-foreground mb-2 line-clamp-1">
                                      {option.description}
                                    </p>
                                    <div className="flex flex-col gap-1">
                                      {option.links.map((link) => (
                                        <span
                                          key={link.label}
                                          className="text-xs text-muted-foreground hover:text-primary transition-colors"
                                        >
                                          {link.label}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </>
                            );

                            return (
                              <motion.div
                                key={option.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                whileHover={{ scale: 1.02, y: -2 }}
                                className="group p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-muted/50 transition-all cursor-pointer"
                                onClick={() => setResourcesOpen(false)}
                              >
                                {isInternalLink ? (
                                  <Link to={mainLink} className="block">
                                    {Content}
                                  </Link>
                                ) : (
                                  <a href={mainLink} className="block">
                                    {Content}
                                  </a>
                                )}
                              </motion.div>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <button
                  key={item.label}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
                </button>
              )
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            {isAuthenticated ? (
              <>
                <span className="text-sm text-muted-foreground">{user?.email}</span>
                <Button variant="ghost" className="text-sm font-medium" onClick={logout}>
                  Sign Out
                </Button>
              </>
            ) : (
              <Button
                variant="ghost"
                className="text-sm font-medium"
                onClick={async () => {
                  try {
                    await loginWithGoogle();
                  } catch (error) {
                    // If Google OAuth fails, fall back to login dialog
                    setLoginDialogOpen(true);
                  }
                }}
              >
                Sign In
              </Button>
            )}
            <Button
              className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() => setCalendarDialogOpen(true)}
            >
              <Calendar className="h-4 w-4" />
              Talk to Sales
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border"
          >
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navItems.map((item) => (
                item.label === "Resources" ? (
                  <div key={item.label}>
                    <button
                      onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                      className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                    >
                      {item.label}
                      <motion.div
                        animate={{ rotate: mobileResourcesOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="h-4 w-4" />
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {mobileResourcesOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="px-4 py-2 space-y-2">
                            {resourcesOptions.map((option, index) => {
                              const Icon = option.icon;
                              return (
                                <motion.a
                                  key={option.id}
                                  href="#"
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  exit={{ opacity: 0, x: -10 }}
                                  transition={{ delay: index * 0.05 }}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    setMobileResourcesOpen(false);
                                    setMobileMenuOpen(false);
                                  }}
                                  className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                                >
                                  <div className={`w-8 h-8 rounded-lg ${option.bgColor} flex items-center justify-center flex-shrink-0`}>
                                    <Icon className={`h-4 w-4 ${option.color}`} />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="font-medium text-sm text-foreground">{option.title}</div>
                                    <div className="text-xs text-muted-foreground">{option.description}</div>
                                  </div>
                                </motion.a>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <button
                    key={item.label}
                    className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                  >
                    {item.label}
                    {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
                  </button>
                )
              ))}
              <div className="pt-4 space-y-2">
                {isAuthenticated ? (
                  <>
                    <div className="px-4 py-2 text-sm text-muted-foreground">{user?.email}</div>
                    <Button variant="ghost" className="w-full justify-center" onClick={logout}>
                      Sign Out
                    </Button>
                  </>
                ) : (
                  <Button
                    variant="ghost"
                    className="w-full justify-center"
                    onClick={async () => {
                      setMobileMenuOpen(false);
                      try {
                        await loginWithGoogle();
                      } catch (error) {
                        // If Google OAuth fails, fall back to login dialog
                        setLoginDialogOpen(true);
                      }
                    }}
                  >
                    Sign In
                  </Button>
                )}
                <Button
                  className="w-full gap-2"
                  onClick={() => {
                    setCalendarDialogOpen(true);
                    setMobileMenuOpen(false);
                  }}
                >
                  <Calendar className="h-4 w-4" />
                  Talk to Sales
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <LoginDialog open={loginDialogOpen} onOpenChange={setLoginDialogOpen} />
      <CalendarDialog open={calendarDialogOpen} onOpenChange={setCalendarDialogOpen} />
    </nav>
  );
};
