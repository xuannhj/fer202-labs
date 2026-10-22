import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router';
import useTheme from './hooks/useTheme';
import MainLayout from './components/MainLayout';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div data-bs-theme={theme} className="bg-body text-body min-vh-100">
      <Routes>
        <Route element={<MainLayout theme={theme} toggleTheme={toggleTheme} />}>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}
