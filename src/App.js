import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { Container } from '@mui/material';
import ListaProveedores from './components/ListaProveedores';
import CrearProveedor from './components/CrearProveedor';
import EditarProveedor from './components/EditarProveedor';
import VentanaEmergente from './components/VentanaEmergente';

const App = () => {
  return (
    <Router>
      <Container maxWidth="lg">
        <Routes>
          <Route exact path="/" element={<ListaProveedores />} />
          <Route exact path="/create" element={<CrearProveedor />} />
          <Route exact path="/edit/:id" element={<EditarProveedor />} />
          <Route exact path="/screening/:id" element={<VentanaEmergente />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;

