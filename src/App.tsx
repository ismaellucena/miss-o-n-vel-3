import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LivroLista from './LivroLista';
import LivroForm from './LivroForm';
import NavBar from './NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<LivroLista />} />
        <Route path="/novo" element={<LivroForm />} />
      </Routes>
    </Router>
  );
}

export default App;
