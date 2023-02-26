import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Empresa from "./components/Empresa/index";
import Home from "./components/Home/index";
import Fornecedor from "./components/Fornecedor/index";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="empresa" element={<Empresa />} />
          <Route path="fornecedor" element={<Fornecedor />} />
        </Routes>
      </Router>
    </div>


  );
}

export default App;
