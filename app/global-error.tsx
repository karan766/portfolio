"use client";

import { useEffect } from "react";
import { FaExclamationTriangle, FaRefresh } from 'react-icons/fa'

export default function GlobalError({ 
  error, 
  reset 
}: { 
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Global error:', error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="min-h-screen bg-black flex items-center justify-center px-4">
          <div className="text-center max-w-md mx-auto">
            <div className="mb-8">
              <FaExclamationTriangle className="text-6xl text-red-500 mx-auto mb-4" />
              <h1 className="text-3xl font-bold text-white mb-2">Something went wrong!</h1>
              <p className="text-white-200 mb-8">
                An unexpected error occurred. Please try refreshing the page.
              </p>
              {process.env.NODE_ENV === 'development' && (
                <details className="text-left bg-gray-900 p-4 rounded-lg mb-4">
                  <summary className="text-purple cursor-pointer mb-2">Error Details</summary>
                  <pre className="text-xs text-white-200 overflow-auto">
                    {error.message}
                  </pre>
                </details>
              )}
            </div>
            
            <button
              onClick={reset}
              className="inline-flex items-center gap-2 bg-purple hover:bg-purple/80 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
            >
              <FaRefresh className="text-sm" />
              Try Again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}