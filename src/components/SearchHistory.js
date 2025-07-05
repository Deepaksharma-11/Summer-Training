import React from 'react';
import { FaTrash } from 'react-icons/fa';

export default function SearchHistory({ history, onSelect, onClearAll, onDeleteItem }) {
  if (!history || history.length === 0) return null;
  
  return (
    <div className="w-full max-w-xl mx-auto mb-6">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-md font-semibold text-gray-700 dark:text-gray-200">Search History</h3>
        <button
          onClick={onClearAll}
          className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-red-100 dark:hover:bg-red-900 hover:text-red-600 dark:hover:text-red-400 transition-all duration-200"
        >
          <FaTrash className="w-3 h-3" />
          Clear All
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {history.map((username, idx) => (
          <div
            key={username + idx}
            className="group relative bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800 transition-all duration-200"
          >
            <button
              onClick={() => onSelect(username)}
              className="px-3 py-1 pr-6 text-sm"
            >
              {username}
            </button>
            <button
              onClick={() => onDeleteItem(username)}
              className="absolute right-1 top-1/2 -translate-y-1/2 w-4 h-4 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors duration-200 opacity-0 group-hover:opacity-100"
              title="Remove from history"
            >
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
} 