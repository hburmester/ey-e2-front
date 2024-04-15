import React from 'react';
import { TextField, Button } from '@mui/material';

const CrearProveedor = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic to handle form submission (e.g., API call to create supplier)
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField label="Razón Social" required />
      <TextField label="Nombre Comercial" required />
      {/* Add more fields for other supplier properties */}
      <Button type="submit" variant="contained" color="primary">
        Crear
      </Button>
    </form>
  );
};

export default CrearProveedor;
