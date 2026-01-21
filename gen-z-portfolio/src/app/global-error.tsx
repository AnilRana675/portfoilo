"use client";

import { AlertTriangle, RefreshCw } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen flex items-center justify-center px-4">
        <div className="max-w-lg w-full text-center">
          {/* Error Icon */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-20 h-20 border-2 border-red-500 rotate-45 flex items-center justify-center">
                <AlertTriangle className="w-10 h-10 text-red-500 -rotate-45" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 animate-pulse" />
            </div>
          </div>

          {/* Error Code */}
          <p className="text-red-500 font-mono text-sm tracking-widest mb-2">
            {"// CRITICAL_SYSTEM_FAILURE"}
          </p>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            FATAL_ERROR
          </h1>

          {/* Description */}
          <p className="text-gray-400 font-mono text-sm mb-8">
            A critical error has occurred in the root layout.
            <br />
            The application needs to be restarted.
          </p>

          {/* Error Details */}
          {error.digest && (
            <div className="mb-8 p-3 border border-gray-700 bg-gray-900 font-mono text-xs text-gray-500">
              ERROR_ID: {error.digest}
            </div>
          )}

          {/* Retry Button */}
          <button
            onClick={reset}
            className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-orange-500 text-black font-mono font-bold text-sm hover:bg-white transition-colors"
          >
            <RefreshCw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
            RESTART_APPLICATION
          </button>

          {/* Terminal Style Footer */}
          <div className="mt-12 text-left font-mono text-xs text-gray-600 border border-gray-700 p-4 bg-gray-900">
            <p className="text-red-400">$ kernel --panic</p>
            <p className="mt-2 text-gray-500">
              [FATAL] Root layout crashed
            </p>
            <p className="text-gray-500">
              [LOG] Core dump initiated
            </p>
            <p className="text-orange-400">
              [TIP] Click RESTART to reload the application
            </p>
          </div>
        </div>
      </body>
    </html>
  );
}
