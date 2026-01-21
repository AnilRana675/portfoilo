"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Menu, X, Github, Twitter, Mail } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { label: "ABOUT", href: "#about" },
  { label: "PROJECTS", href: "#projects" },
  { label: "CONTACT", href: "#contact" },
];

const externalLinks = [
  { icon: Github, href: "https://github.com/AnilRana675", label: "GitHub" },
  { icon: Twitter, href: "https://x.com/itsboymystogan", label: "Twitter" },
  { icon: Mail, href: "mailto:amagar675@gmail.com", label: "Email" },
];

export function Navbar() {
  const [time, setTime] = useState("00:00:00");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { scrollY } = useScroll();

  const backdropBlur = useTransform(scrollY, [0, 100], ["blur(0px)", "blur(12px)"]);
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(5, 5, 5, 0.5)", "rgba(5, 5, 5, 0.95)"]
  );
  const borderColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(31, 31, 31, 1)", "rgba(255, 69, 0, 0.3)"]
  );

  // Update time
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toISOString().split("T")[1].split(".")[0]);
    };
    const interval = setInterval(updateTime, 1000);
    updateTime();
    return () => clearInterval(interval);
  }, []);

  // Track active section on scroll
  useEffect(() => {
    const sections = ["about", "projects", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);

    // Smooth scroll to section
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 h-14 border-b flex justify-between items-center px-4 md:px-6 font-mono text-xs uppercase tracking-widest text-gray-400"
        style={{
          backdropFilter: backdropBlur,
          WebkitBackdropFilter: backdropBlur,
          backgroundColor: backgroundColor,
          borderColor: borderColor,
        }}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {/* Logo / Home Link */}
        <Link
          href="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3 hover:opacity-80 transition-opacity group"
        >
          <motion.span
            className="w-3 h-3 bg-hazard"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="text-hazard font-bold group-hover:text-hazard-bright transition-colors">
            SYS.ROOT.ACCESS
          </span>
          <span className="text-gray-600 hidden sm:inline">{"//"}V9.2.041</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link, index) => (
            <motion.button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className={`relative cursor-pointer transition-colors group ${
                activeSection === link.href.slice(1)
                  ? "text-hazard"
                  : "text-gray-400 hover:text-white"
              }`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              [ {link.label} ]
              <motion.span
                className="absolute bottom-0 left-0 w-full h-px bg-hazard origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: activeSection === link.href.slice(1) ? 1 : 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.2 }}
              />
            </motion.button>
          ))}

          {/* Divider */}
          <div className="w-px h-4 bg-mono-gray" />

          {/* External Links */}
          {externalLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-hazard transition-colors"
              aria-label={link.label}
            >
              <link.icon className="w-4 h-4" />
            </a>
          ))}
        </div>

        {/* Time Display (Desktop) */}
        <motion.div
          className="hidden md:block text-gray-500"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          TIME: <span className="text-gray-400">{time}</span> Z
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden relative w-10 h-10 flex items-center justify-center border border-mono-gray hover:border-hazard transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileTap={{ scale: 0.95 }}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          <AnimatePresence mode="wait">
            {isMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-5 h-5 text-hazard" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="w-5 h-5" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.nav>

      {/* Fullscreen Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-mono-black flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

            {/* Glitch Lines */}
            <motion.div
              className="absolute top-1/4 left-0 w-full h-px bg-hazard/30"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
            <motion.div
              className="absolute top-3/4 left-0 w-full h-px bg-hazard/20"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            />

            {/* Menu Content */}
            <div className="flex flex-col items-center justify-center flex-1 relative z-10 pt-14">
              {/* Navigation Links */}
              <nav className="flex flex-col items-center gap-8 mb-12">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.label}
                    onClick={() => handleNavClick(link.href)}
                    className={`text-4xl sm:text-5xl font-bold font-display tracking-tight transition-colors ${
                      activeSection === link.href.slice(1)
                        ? "text-hazard"
                        : "text-white hover:text-hazard"
                    }`}
                    initial={{ opacity: 0, y: 40, x: -20 }}
                    animate={{ opacity: 1, y: 0, x: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    <span className="text-hazard font-mono text-sm mr-4">
                      0{index + 1}_
                    </span>
                    [ {link.label} ]
                  </motion.button>
                ))}
              </nav>

              {/* External Links */}
              <motion.div
                className="flex gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                {externalLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="p-4 border border-mono-gray hover:border-hazard hover:text-hazard transition-colors"
                    aria-label={link.label}
                  >
                    <link.icon className="w-6 h-6" />
                  </a>
                ))}
              </motion.div>

              {/* Time Display */}
              <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-xs text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                SYS_TIME: {time} UTC
              </motion.div>

              {/* Corner Decorations */}
              <div className="absolute top-20 left-6 w-8 h-8 border-t-2 border-l-2 border-hazard/50" />
              <div className="absolute bottom-20 right-6 w-8 h-8 border-b-2 border-r-2 border-hazard/50" />
            </div>

            {/* Scanlines Effect */}
            <div className="absolute inset-0 scanlines opacity-20 pointer-events-none" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
