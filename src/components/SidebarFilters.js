import React from 'react';

const LANGUAGES = [
  'JavaScript',
  'Java',
  'Python',
  'C++',
  'C',
  'TypeScript',
  'HTML',
];

export default function SidebarFilters({ selected, onChange }) {
  const handleCheckbox = (lang) => {
    if (selected.includes(lang)) {
      onChange(selected.filter(l => l !== lang));
    } else {
      onChange([...selected, lang]);
    }
  };

  return (
    <aside className="w-full md:w-64 bg-white/70 dark:bg-[#282828] rounded-xl shadow-lg p-4 mb-4 md:mb-0 md:mr-6 sticky top-20 h-fit">
      <h2 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-100">Filter by Language</h2>
      <div className="flex flex-col gap-2">
        {LANGUAGES.map(lang => (
          <label key={lang} className="inline-flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={selected.includes(lang)}
              onChange={() => handleCheckbox(lang)}
              className="form-checkbox h-4 w-4 text-blue-600 transition"
            />
            <span className="text-gray-700 dark:text-gray-200">{lang}</span>
          </label>
        ))}
      </div>
    </aside>
  );
} 