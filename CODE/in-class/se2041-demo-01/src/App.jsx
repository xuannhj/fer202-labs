import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router';
import useTheme from './hooks/useTheme';
import MainLayout from './components/MainLayout';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import OrchidsManagement from './pages/OrchidsManagement';
import AddOrchid from './pages/AddOrchid';
import UpdateOrchid from './pages/UpdateOrchid';

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div data-bs-theme={theme} className="bg-body text-body min-vh-100">
      <Routes>
        <Route element={<MainLayout theme={theme} toggleTheme={toggleTheme} />}>
          <Route path="/" element={<Home />} />
          <Route path="/management" element={<OrchidsManagement />} />
          <Route path="/add" element={<AddOrchid />} />
          <Route path="/update/:id" element={<UpdateOrchid />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

