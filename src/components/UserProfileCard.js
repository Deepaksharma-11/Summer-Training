import React from 'react';
import { MdLocationOn } from 'react-icons/md';
import { FaUserFriends, FaUserPlus, FaGithub } from 'react-icons/fa';

export default function UserProfileCard({ user }) {
  if (!user) return null;
  return (
    <div className="w-full max-w-2xl mx-auto bg-white/70 dark:bg-gray-900/70 backdrop-blur rounded-2xl shadow-xl p-6 mb-6 flex flex-col md:flex-row items-center gap-6 border border-gray-200 dark:border-gray-800 transition-transform duration-300 hover:scale-105">
      <img
        src={user.avatar_url}
        alt={user.name || user.login}
        className="rounded-full w-24 h-24 ring-4 ring-blue-500 shadow-lg object-cover"
      />
      <div className="flex-1 flex flex-col gap-2 text-center md:text-left">
        <div className="flex flex-col gap-1">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">{user.name}</span>
          <span className="text-gray-500 dark:text-gray-300 text-sm">@{user.login}</span>
        </div>
        {user.bio && <p className="text-gray-700 dark:text-gray-200 italic mt-2">{user.bio}</p>}
        <div className="flex items-center gap-4 flex-wrap justify-center md:justify-start mt-2">
          {user.location && (
            <span className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <MdLocationOn className="text-blue-500" />
              {user.location}
            </span>
          )}
          <span className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <FaUserFriends className="text-green-500" />
            {user.followers} followers
          </span>
          <span className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <FaUserPlus className="text-purple-500" />
            {user.following} following
          </span>
        </div>
        <div className="mt-4">
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white font-semibold rounded-full hover:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
          >
            <FaGithub className="w-4 h-4" />
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
} 