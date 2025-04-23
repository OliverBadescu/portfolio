import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { Button } from './ui/Button';

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState('light');


  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'dark' || stored === 'light') setTheme(stored);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme, mounted]);
  if (!mounted) {
    return null;
  }

  return (
    <header className="header-container">
      <nav className="nav-container">
        <Link to="/">home</Link>
        <Link to="/projects">projects</Link>
        <Link to="/contact">contact</Link>
      </nav>
      <div>
        <Button
          size="icon"
          variant="ghost"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {theme === 'dark' ? (
            <SunIcon className="size-10 text-orange-300 sun-icon" />
          ) : (
            <MoonIcon className="size-10 text-indigo-500 moon-icon" />
          )}
          <span className="sr-only">Theme Toggle</span>
        </Button>
      </div>
    </header>
  );
}
