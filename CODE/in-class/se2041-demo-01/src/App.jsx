
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Orchid from './components/Orchid';
import MyNavBar from './components/MyNavBar';
import useTheme from './hooks/useTheme';

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div data-bs-theme={theme} className="bg-body text-body min-vh-100">
      <MyNavBar theme={theme} toggleTheme={toggleTheme} />
      <Orchid />
    </div>
  );
}
