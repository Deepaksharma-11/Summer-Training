import React, { useEffect, useState, useCallback } from 'react';
import Navbar from './components/Navbar';
import SidebarFilters from './components/SidebarFilters';
import SearchBar from './components/SearchBar';
import UserProfileCard from './components/UserProfileCard';
import RepoCard from './components/RepoCard';
import NotFound from './components/NotFound';
import SearchHistory from './components/SearchHistory';
import WelcomeSection from './components/WelcomeSection';

const HISTORY_KEY = 'gitview-history';
const THEME_KEY = 'gitview-theme';

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem(THEME_KEY) || 'light');
  const [, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [filteredRepos, setFilteredRepos] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [history, setHistory] = useState(() => JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]'));

  // Theme effect
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  // Filter repos by language
  useEffect(() => {
    if (languages.length === 0) {
      setFilteredRepos(repos);
    } else {
      setFilteredRepos(repos.filter(r => r.language && languages.includes(r.language)));
    }
  }, [languages, repos]);

  // Search handler
  const handleSearch = useCallback(async (uname) => {
    setLoading(true);
    setNotFound(false);
    setUser(null);
    setRepos([]);
    setFilteredRepos([]);
    setUsername(uname);
    try {
      const userRes = await fetch(`https://api.github.com/users/${uname}`);
      if (userRes.status === 404) {
        setNotFound(true);
        setLoading(false);
        return;
      }
      const userData = await userRes.json();
      setUser(userData);
      const repoRes = await fetch(userData.repos_url + '?per_page=100');
      const repoData = await repoRes.json();
      setRepos(repoData);
      setFilteredRepos(repoData);
      // Update search history
      setHistory(prev => {
        const newHist = [uname, ...prev.filter(u => u !== uname)].slice(0, 5);
        localStorage.setItem(HISTORY_KEY, JSON.stringify(newHist));
        return newHist;
      });
    } catch (e) {
      setNotFound(true);
    } finally {
      setLoading(false);
    }
  }, []);

  // Clear all search history
  const handleClearAll = useCallback(() => {
    setHistory([]);
    localStorage.removeItem(HISTORY_KEY);
  }, []);

  // Delete individual item from search history
  const handleDeleteItem = useCallback((usernameToDelete) => {
    setHistory(prev => {
      const newHist = prev.filter(u => u !== usernameToDelete);
      localStorage.setItem(HISTORY_KEY, JSON.stringify(newHist));
      return newHist;
    });
  }, []);

  // Theme toggle
  const toggleTheme = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'));

  return (
    <div className="min-h-screen w-full font-sans transition-all duration-300 ease-in-out bg-white dark:bg-[#121212]">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      {/* Conditional Layout */}
      {user ? (
        // Layout with sidebar when user is displayed
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 px-2 md:px-6 py-8">
          {/* Sidebar - only shown when user is displayed */}
          <div className="md:w-1/4 w-full">
            <SidebarFilters selected={languages} onChange={setLanguages} />
          </div>
          {/* Main Content */}
          <main className="flex-1 w-full">
            <SearchBar onSearch={handleSearch} loading={loading} />
            <SearchHistory 
              history={history} 
              onSelect={handleSearch}
              onClearAll={handleClearAll}
              onDeleteItem={handleDeleteItem}
            />
            <UserProfileCard user={user} />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredRepos.map(repo => (
                <RepoCard key={repo.id} repo={repo} />
              ))}
            </div>
          </main>
        </div>
      ) : (
        // Layout without sidebar for welcome/loading/not found states
        <div className="max-w-7xl mx-auto px-2 md:px-6 py-8">
          <main className="w-full">
            {loading && (
              <div className="flex justify-center py-10">
                <svg className="animate-spin h-12 w-12 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                </svg>
              </div>
            )}
            {notFound && !loading && <NotFound />}
            {!user && !loading && !notFound && (
              <WelcomeSection 
                onUserSelect={handleSearch}
                SearchBarComponent={<SearchBar onSearch={handleSearch} loading={loading} />}
                SearchHistoryComponent={
                  <SearchHistory 
                    history={history} 
                    onSelect={handleSearch}
                    onClearAll={handleClearAll}
                    onDeleteItem={handleDeleteItem}
                  />
                }
              />
            )}
          </main>
        </div>
      )}
    </div>
  );
}

export default App;
