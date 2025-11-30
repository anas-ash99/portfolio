import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToHash from './components/ScrollToHash';
import Home from './pages/Home';
import AllProjects from './pages/AllProjects';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = i18n.dir();
    document.documentElement.lang = i18n.language;
  }, [i18n, i18n.language]);

  return (
    <Router basename={import.meta.env.BASE_URL}>
      <ScrollToHash />
      <div className="bg-navy-900 min-h-screen text-slate-200 selection:bg-teal-400 selection:text-navy-900 font-sans">
        <Navbar />
        <main className="container mx-auto px-6 md:px-12 lg:px-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/all-projects" element={<AllProjects />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
