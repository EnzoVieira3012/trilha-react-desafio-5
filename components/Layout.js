import { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.classList.add(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header name="Meu Blog" />
      <button
        onClick={toggleTheme}
        className="p-2 self-end mr-4 mt-4 rounded bg-gray-200 dark:bg-gray-800"
      >
        Mudar para {theme === 'light' ? 'Escuro' : 'Claro'}
      </button>
      <main className="flex-1 p-4">{children}</main>
      <Footer />
    </div>
  );
}