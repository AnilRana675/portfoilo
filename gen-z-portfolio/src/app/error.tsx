"use client";

import { useEffect } from "react";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-mono-black flex items-center justify-center px-4">
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
          {"// SYSTEM_ERROR"}
        </p>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
          RUNTIME_EXCEPTION
        </h1>

        {/* Description */}
        <p className="text-gray-400 font-mono text-sm mb-8">
          An unexpected error occurred during execution.
          <br />
          The system has logged this incident for investigation.
        </p>

        {/* Error Details */}
        {error.digest && (
          <div className="mb-8 p-3 border border-mono-gray bg-mono-dark font-mono text-xs text-gray-500">
            ERROR_ID: {error.digest}
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-hazard text-black font-mono font-bold text-sm hover:bg-white transition-colors"
          >
            <RefreshCw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
            RETRY_OPERATION
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-mono-gray text-gray-300 font-mono text-sm hover:border-hazard hover:text-hazard transition-colors"
          >
            <Home className="w-4 h-4" />
            RETURN_HOME
          </Link>
        </div>

        {/* Terminal Style Footer */}
        <div className="mt-12 text-left font-mono text-xs text-gray-600 border border-mono-gray p-4 bg-mono-dark">
          <p className="text-red-400">$ error --trace</p>
          <p className="mt-2 text-gray-500">
            [ERR] Process terminated unexpectedly
          </p>
          <p className="text-gray-500">
            [LOG] Stack trace saved to memory
          </p>
          <p className="text-hazard">
            [TIP] Click RETRY to attempt recovery
          </p>
        </div>
      </div>
    </div>
  );
}
