import React from 'react';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      {/* Placeholder for animated illustration */}
      <div className="w-40 h-40 mb-6 animate-bounce">
        <svg viewBox="0 0 100 100" className="w-full h-full text-gray-400 dark:text-gray-600">
          <circle cx="50" cy="50" r="40" fill="currentColor" opacity="0.2" />
          <text x="50" y="55" textAnchor="middle" fontSize="32" fill="currentColor" opacity="0.7">?</text>
        </svg>
      </div>
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">User not found. Try again.</h2>
    </div>
  );
} 