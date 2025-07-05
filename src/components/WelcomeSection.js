import React from 'react';

const SAMPLE_USERS = [
  { username: 'torvalds', name: 'Linus Torvalds', avatar: 'https://avatars.githubusercontent.com/u/1024025?v=4' },
  { username: 'gaearon', name: 'Dan Abramov', avatar: 'https://avatars.githubusercontent.com/u/810438?v=4' },
  { username: 'addy-dclxvi', name: 'Addy Osmani', avatar: 'https://avatars.githubusercontent.com/u/110953?v=4' },
  { username: 'sindresorhus', name: 'Sindre Sorhus', avatar: 'https://avatars.githubusercontent.com/u/170270?v=4' },
];

export default function WelcomeSection({ onUserSelect, SearchBarComponent, SearchHistoryComponent }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-100px)] px-4 text-center">
      {/* Modern SVG Illustration */}
      <div className="w-64 h-64 mb-8">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          {/* Background circle */}
          <circle cx="100" cy="100" r="80" fill="url(#gradient)" opacity="0.1" />
          
          {/* GitHub Octocat inspired illustration */}
          <g transform="translate(100, 100)">
            {/* Head */}
            <circle cx="0" cy="-20" r="25" fill="#24292e" />
            
            {/* Ears */}
            <ellipse cx="-15" cy="-35" rx="8" ry="12" fill="#24292e" />
            <ellipse cx="15" cy="-35" rx="8" ry="12" fill="#24292e" />
            
            {/* Eyes */}
            <circle cx="-8" cy="-25" r="3" fill="white" />
            <circle cx="8" cy="-25" r="3" fill="white" />
            <circle cx="-8" cy="-25" r="1.5" fill="#24292e" />
            <circle cx="8" cy="-25" r="1.5" fill="#24292e" />
            
            {/* Body */}
            <ellipse cx="0" cy="15" rx="20" ry="25" fill="#24292e" />
            
            {/* Arms */}
            <ellipse cx="-25" cy="5" rx="8" ry="15" fill="#24292e" transform="rotate(-30)" />
            <ellipse cx="25" cy="5" rx="8" ry="15" fill="#24292e" transform="rotate(30)" />
            
            {/* Legs */}
            <ellipse cx="-8" cy="35" rx="6" ry="12" fill="#24292e" />
            <ellipse cx="8" cy="35" rx="6" ry="12" fill="#24292e" />
            
            {/* GitHub icon on body */}
            <path d="M-8 8 L8 8 L8 12 L-8 12 Z M-4 4 L4 4 L4 8 L-4 8 Z" fill="white" />
          </g>
          
          {/* Decorative elements */}
          <circle cx="40" cy="40" r="3" fill="#3b82f6" opacity="0.6">
            <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="160" cy="60" r="2" fill="#10b981" opacity="0.6">
            <animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="180" cy="140" r="4" fill="#f59e0b" opacity="0.6">
            <animate attributeName="opacity" values="0.6;1;0.6" dur="1.8s" repeatCount="indefinite" />
          </circle>
          
          {/* Gradient definition */}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#8b5cf6', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
        </svg>
      </div>
      {/* Welcome Message */}
      <div className="max-w-2xl mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Welcome to <span className="text-blue-600 dark:text-blue-400">GitView</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Discover amazing developers and explore their repositories. Search for any GitHub username to get started!
        </p>
      </div>

      {/* Search Bar */}
      <div className="w-full max-w-xl mb-6">
        {SearchBarComponent}
      </div>

      {/* Search History */}
      <div className="w-full max-w-xl mb-12">
        {SearchHistoryComponent}
      </div>


      {/* Feature Highlights */}
      <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-12">
        <span className="flex items-center gap-2">
          <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          View profiles & stats
        </span>
        <span className="flex items-center gap-2">
          <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          Browse repositories
        </span>
        <span className="flex items-center gap-2">
          <svg className="w-4 h-4 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          Filter by language
        </span>
      </div>

      {/* Sample Users */}
      <div className="w-full max-w-4xl">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
          Popular Developers to Explore
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {SAMPLE_USERS.map((user) => (
            <button
              key={user.username}
              onClick={() => onUserSelect(user.username)}
              className="group bg-white/70 dark:bg-gray-800/70 rounded-xl p-4 hover:scale-105 transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:shadow-lg"
            >
              <img
                src={user.avatar}
                alt={user.name}
                className="w-16 h-16 rounded-full mx-auto mb-3 ring-2 ring-blue-500 group-hover:ring-blue-400 transition-all"
              />
              <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {user.name}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-xs">
                @{user.username}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
} 