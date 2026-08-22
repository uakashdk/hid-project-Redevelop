import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EnquiryForm from './components/forms/EnquiryForm';
import Media from './components/sections/Media';
import Career from './components/sections/Career';
import BlogDetail from './components/sections/BlogDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/let's talk" element={<EnquiryForm />} />
        <Route path="/media" element={<Media />} />
        <Route path="/career" element={<Career />} />
        <Route path="/readmore" element={<BlogDetail />} />
      </Routes>
    </Router>
  );
}

export default App;