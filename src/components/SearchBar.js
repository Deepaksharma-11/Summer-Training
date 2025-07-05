import React, { useState } from 'react';

export default function SearchBar({ onSearch, loading }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSearch(input.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-x-2 transition-all duration-300 w-full max-w-xl mx-auto mb-6">
      <input
        type="text"
        className="flex-1 px-4 py-2 rounded-l-full bg-white dark:bg-[#232a34] text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 w-full focus:outline-none transition-all"
        placeholder="Enter GitHub username..."
        value={input}
        onChange={e => setInput(e.target.value)}
        aria-label="GitHub username"
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition-all flex items-center gap-2"
        disabled={loading}
      >
        {loading ? (
          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
          </svg>
        ) : (
          'Search'
        )}
      </button>
    </form>
  );
} 