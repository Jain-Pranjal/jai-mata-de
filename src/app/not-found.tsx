import React from 'react'
import Link from 'next/link'

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#141E30] to-[#243B55]">
      <div className="text-center p-8 rounded-xl bg-white/5 backdrop-blur-sm border-2 border-yellow-400/20 shadow-2xl m-3">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-amber-200 to-yellow-400 bg-clip-text text-transparent mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-yellow-400 mb-4">Page Not Found</h2>
        <p className="text-gray-200 mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          href="/" 
          className="inline-block px-6 py-3 bg-white/5 text-yellow-400 rounded-lg border-2 border-yellow-400/20 hover:bg-white/10 transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}

export default NotFound