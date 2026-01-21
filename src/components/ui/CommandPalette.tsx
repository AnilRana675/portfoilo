"use client";

import { useEffect, useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  Command,
  Home,
  FolderOpen,
  User,
  Mail,
  Github,
  Twitter,
  Copy,
  Check,
  X,
} from "lucide-react";

interface CommandItem {
  id: string;
  label: string;
  description: string;
  icon: React.ReactNode;
  action: () => void;
  category: string;
}

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const router = useRouter();

  const copyEmail = useCallback(() => {
    navigator.clipboard.writeText("amagar675@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    setIsOpen(false);
  }, []);

  const commands: CommandItem[] = useMemo(() => [
    {
      id: "home",
      label: "Go to Home",
      description: "Navigate to homepage",
      icon: <Home className="w-4 h-4" />,
      action: () => {
        router.push("/");
        setIsOpen(false);
      },
      category: "Navigation",
    },
    {
      id: "projects",
      label: "View Projects",
      description: "Browse all projects",
      icon: <FolderOpen className="w-4 h-4" />,
      action: () => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      },
      category: "Navigation",
    },
    {
      id: "about",
      label: "About Me",
      description: "Learn more about Anil",
      icon: <User className="w-4 h-4" />,
      action: () => {
        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      },
      category: "Navigation",
    },
    {
      id: "contact",
      label: "Contact",
      description: "Get in touch",
      icon: <Mail className="w-4 h-4" />,
      action: () => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      },
      category: "Navigation",
    },
    {
      id: "github",
      label: "Open GitHub",
      description: "github.com/AnilRana675",
      icon: <Github className="w-4 h-4" />,
      action: () => {
        window.open("https://github.com/AnilRana675", "_blank");
        setIsOpen(false);
      },
      category: "Social",
    },
    {
      id: "twitter",
      label: "Open X/Twitter",
      description: "x.com/itsboymystogan",
      icon: <Twitter className="w-4 h-4" />,
      action: () => {
        window.open("https://x.com/itsboymystogan", "_blank");
        setIsOpen(false);
      },
      category: "Social",
    },
    {
      id: "email",
      label: "Copy Email",
      description: "amagar675@gmail.com",
      icon: copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />,
      action: copyEmail,
      category: "Actions",
    },
  ], [copyEmail, copied, router]);

  const filteredCommands = useMemo(() => 
    commands.filter(
      (cmd) =>
        cmd.label.toLowerCase().includes(search.toLowerCase()) ||
        cmd.description.toLowerCase().includes(search.toLowerCase())
    ),
    [commands, search]
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
        setSearch("");
        setSelectedIndex(0);
      }

      if (!isOpen) return;

      if (e.key === "Escape") {
        setIsOpen(false);
      }

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev < filteredCommands.length - 1 ? prev + 1 : 0
        );
      }

      if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev > 0 ? prev - 1 : filteredCommands.length - 1
        );
      }

      if (e.key === "Enter" && filteredCommands[selectedIndex]) {
        filteredCommands[selectedIndex].action();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filteredCommands, selectedIndex]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[200]"
          />

          {/* Command Palette */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.15 }}
            className="fixed top-[20%] left-1/2 -translate-x-1/2 w-full max-w-xl z-[201] mx-4"
          >
            <div className="bg-mono-dark border border-mono-gray shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="flex items-center gap-3 px-4 py-3 border-b border-mono-gray">
                <Command className="w-4 h-4 text-hazard" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setSelectedIndex(0);
                  }}
                  placeholder="Type a command or search..."
                  className="flex-1 bg-transparent font-mono text-sm focus:outline-none placeholder:text-gray-600"
                  autoFocus
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-mono-gray rounded transition-colors"
                >
                  <X className="w-4 h-4 text-gray-500" />
                </button>
              </div>

              {/* Commands */}
              <div className="max-h-[300px] overflow-y-auto">
                {filteredCommands.length === 0 ? (
                  <div className="px-4 py-8 text-center text-gray-500 font-mono text-sm">
                    No commands found
                  </div>
                ) : (
                  <div className="py-2">
                    {filteredCommands.map((cmd, index) => (
                      <button
                        key={cmd.id}
                        onClick={cmd.action}
                        onMouseEnter={() => setSelectedIndex(index)}
                        className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                          selectedIndex === index
                            ? "bg-hazard/10 text-white"
                            : "text-gray-400 hover:bg-mono-gray"
                        }`}
                      >
                        <span
                          className={
                            selectedIndex === index ? "text-hazard" : ""
                          }
                        >
                          {cmd.icon}
                        </span>
                        <div className="flex-1">
                          <p className="font-mono text-sm">{cmd.label}</p>
                          <p className="text-xs text-gray-500">
                            {cmd.description}
                          </p>
                        </div>
                        {selectedIndex === index && (
                          <span className="text-xs font-mono text-hazard">
                            ENTER
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="px-4 py-2 border-t border-mono-gray flex items-center gap-4 text-[10px] font-mono text-gray-600">
                <span>
                  <kbd className="px-1.5 py-0.5 bg-mono-gray rounded text-gray-400">
                    ↑↓
                  </kbd>{" "}
                  navigate
                </span>
                <span>
                  <kbd className="px-1.5 py-0.5 bg-mono-gray rounded text-gray-400">
                    ↵
                  </kbd>{" "}
                  select
                </span>
                <span>
                  <kbd className="px-1.5 py-0.5 bg-mono-gray rounded text-gray-400">
                    esc
                  </kbd>{" "}
                  close
                </span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
