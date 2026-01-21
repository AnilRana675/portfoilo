"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Terminal } from "lucide-react";
import { containerVariants, itemVariants } from "@/lib/animations";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    _gotcha: "", // Honeypot field
  });
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Honeypot check: If filled, simulate success but don't send
    if (formData._gotcha) {
      setStatus("success");
      setFormData({ name: "", email: "", message: "", _gotcha: "" });
      setTimeout(() => setStatus("idle"), 5000);
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("https://formspree.io/f/mlggnbje", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "", _gotcha: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section className="mb-32 max-w-4xl mx-auto px-4" id="contact">
      <motion.div
        className="flex items-end gap-4 mb-12"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-xl font-mono uppercase bg-hazard text-black px-2 py-1 inline-block">
          Contact_Protocol
        </h3>
        <p className="text-gray-500 text-xs font-mono mb-1">
          {"//"} INIT_CONNECTION
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="border border-mono-gray bg-mono-dark p-6 md:p-8"
      >
        <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
          <Terminal className="w-5 h-5 text-hazard" />
          <span className="font-mono text-sm text-gray-400">
            root@portfolio:~$ ./send_message.sh
          </span>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="contact-name" className="text-xs font-mono text-hazard tracking-widest">
                IDENTIFIER_NAME
              </label>
              <input
                id="contact-name"
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full bg-mono-black border border-mono-gray px-4 py-3 font-mono text-sm focus:border-hazard focus:outline-none transition-colors"
                placeholder="John_Doe"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="contact-email" className="text-xs font-mono text-hazard tracking-widest">
                EMAIL_ADDRESS
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full bg-mono-black border border-mono-gray px-4 py-3 font-mono text-sm focus:border-hazard focus:outline-none transition-colors"
                placeholder="user@domain.com"
              />
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-2">
            <label htmlFor="contact-message" className="text-xs font-mono text-hazard tracking-widest">
              MESSAGE_PAYLOAD
            </label>
            <textarea
              id="contact-message"
              required
              rows={6}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full bg-mono-black border border-mono-gray px-4 py-3 font-mono text-sm focus:border-hazard focus:outline-none transition-colors resize-none"
              placeholder="// Enter your message here..."
            />
          </motion.div>

          {/* Honeypot Field - Hidden from real users */}
          <div className="hidden" aria-hidden="true">
            <input
              type="text"
              name="_gotcha"
              tabIndex={-1}
              value={formData._gotcha}
              autoComplete="off"
              onChange={(e) =>
                setFormData({ ...formData, _gotcha: e.target.value })
              }
            />
          </div>

          <motion.div variants={itemVariants}>
            <motion.button
              type="submit"
              disabled={status === "submitting"}
              className="group relative w-full md:w-auto px-8 py-4 bg-hazard text-black font-mono font-bold uppercase tracking-widest hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="flex items-center justify-center gap-3">
                {status === "submitting" ? (
                  <>
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      <Send className="w-4 h-4" />
                    </motion.span>
                    TRANSMITTING...
                  </>
                ) : status === "success" ? (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    MESSAGE_TRANSMITTED
                  </>
                ) : status === "error" ? (
                  <>
                    <AlertCircle className="w-4 h-4" />
                    TRANSMISSION_FAILED
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    EXECUTE_SEND
                  </>
                )}
              </span>
            </motion.button>
          </motion.div>
        </form>

        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 p-4 border border-green-500/30 bg-green-500/10 text-green-400 font-mono text-sm"
          >
            [SUCCESS] Message successfully transmitted. Awaiting response...
          </motion.div>
        )}

        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 p-4 border border-red-500/30 bg-red-500/10 text-red-400 font-mono text-sm"
          >
            [ERROR] Transmission failed. Please try again or use direct email.
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
