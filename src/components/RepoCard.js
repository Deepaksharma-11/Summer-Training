import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { GoRepoForked } from 'react-icons/go';
import { FiCopy } from 'react-icons/fi';

export default function RepoCard({ repo }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(repo.html_url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch (e) {
      // fallback or error
    }
  };

  return (
    <div className="bg-white/60 dark:bg-gray-800/60 rounded-xl shadow-lg p-5 mb-4 backdrop-blur border border-gray-200 dark:border-gray-800 transition hover:scale-[1.02] hover:shadow-2xl flex flex-col gap-2">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-semibold text-blue-700 dark:text-blue-400 hover:underline break-all"
          >
            {repo.name}
          </a>
          <button
            onClick={handleCopy}
            className="ml-1 p-1 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition relative"
            title="Copy repo URL"
            type="button"
          >
            <FiCopy className="w-4 h-4 text-gray-500 dark:text-gray-300" />
            {copied && (
              <span className="absolute left-1/2 -translate-x-1/2 -top-7 bg-gray-800 text-white text-xs rounded px-2 py-1 shadow-lg z-10 animate-fade-in-out">Copied!</span>
            )}
          </button>
        </div>
      </div>
      <p className="text-gray-700 dark:text-gray-200 mb-2 break-words">{repo.description}</p>
      <div className="flex items-center gap-4 flex-wrap mt-2">
        {repo.language && (
          <span className="px-2 py-1 rounded bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 text-xs font-medium">
            {repo.language}
          </span>
        )}
        <span className="flex items-center gap-1 text-gray-600 dark:text-gray-300 text-sm">
          <FaStar className="text-yellow-400" /> {repo.stargazers_count}
        </span>
        <span className="flex items-center gap-1 text-gray-600 dark:text-gray-300 text-sm">
          <GoRepoForked className="text-gray-500" /> {repo.forks_count}
        </span>
      </div>
      <div className="mt-3">
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full bg-gray-800 text-white px-4 py-1 text-sm font-medium hover:bg-gray-700 transition-all shadow"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
}

// Add fade-in-out animation for tooltip
// In your global CSS (e.g., index.css), add:
// @keyframes fade-in-out { 0% { opacity: 0; } 20% { opacity: 1; } 80% { opacity: 1; } 100% { opacity: 0; } }
// .animate-fade-in-out { animation: fade-in-out 1.2s; } 