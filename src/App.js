import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Empresa from "./components/Empresa/index";
import Fornecedor from "./components/Fornecedor/index";
import CreateSupplier from './Pages/CreateSupplier';
import CreateCompany from './Pages/CreateCompany';
import { Home } from '@mui/icons-material';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createsupplier" element={<CreateSupplier />} />
          <Route path="/criarempresa" element={<CreateCompany />} />
          <Route path="empresa" element={<Empresa />} />
          <Route path="fornecedor" element={<Fornecedor />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
