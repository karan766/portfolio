'use client'

import Link from 'next/link'
import { FaHome, FaArrowLeft } from 'react-icons/fa'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-8xl font-bold text-purple mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-white mb-2">Page Not Found</h2>
          <p className="text-white-200 mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-purple hover:bg-purple/80 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
          >
            <FaHome className="text-sm" />
            Go Home
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 border border-purple text-purple hover:bg-purple hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
          >
            <FaArrowLeft className="text-sm" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  )
}